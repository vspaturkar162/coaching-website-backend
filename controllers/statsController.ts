import { Request, Response } from "express"
import Stats from "../models/Stats"


// GET STATS
export const getStats = async (req: Request, res: Response) => {

  try {

    const stats = await Stats.findOne()

    res.json(stats)

  } catch (error) {

    res.status(500).json({
      message: "Error fetching statistics"
    })

  }

}


// SAVE / UPDATE STATS
export const saveStats = async (req: Request, res: Response) => {

  try {

    const {
      students,
      selections,
      experience,
      successRate,
      courses,
      batches,
      faculty
    } = req.body

    let stats = await Stats.findOne()

    if (stats) {

      stats.students = students
      stats.selections = selections
      stats.experience = experience
      stats.successRate = successRate
      stats.courses = courses
      stats.batches = batches
      stats.faculty = faculty

      await stats.save()

      return res.json(stats)

    }

    const newStats = new Stats({
      students,
      selections,
      experience,
      successRate,
      courses,
      batches,
      faculty
    })

    const saved = await newStats.save()

    res.status(201).json(saved)

  } catch (error) {

    res.status(500).json({
      message: "Error saving statistics"
    })

  }

}