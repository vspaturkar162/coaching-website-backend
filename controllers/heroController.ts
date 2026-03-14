// import { Request, Response } from "express"
// import Hero from "../models/Hero"

// /* GET HERO DATA */
// export const getHero = async (req: Request, res: Response) => {
//   try {
//     const hero = await Hero.findOne()

//     if (!hero) {
//       return res.status(404).json({ message: "Hero data not found" })
//     }

//     res.json(hero)
//   } catch (error) {
//     res.status(500).json({ message: "Server error" })
//   }
// }

// /* CREATE / UPDATE HERO */
// export const saveHero = async (req: Request, res: Response) => {
//   try {
//     const { title, description, phone, imageUrl } = req.body

//     let hero = await Hero.findOne()

//     if (hero) {
//       hero.title = title
//       hero.description = description
//       hero.phone = phone
//       hero.imageUrl = imageUrl

//       await hero.save()

//       return res.json(hero)
//     }

//     hero = new Hero({
//       title,
//       description,
//       phone,
//       imageUrl
//     })

//     await hero.save()

//     res.json(hero)
//   } catch (error) {
//     res.status(500).json({ message: "Server error" })
//   }
// }

import { Request, Response } from "express"
import Hero from "../models/Hero"

/* GET HERO DATA */
export const getHero = async (req: Request, res: Response): Promise<void> => {
  try {
    const hero = await Hero.findOne()

    if (!hero) {
      res.status(404).json({ message: "Hero data not found" })
      return
    }

    res.json(hero)
  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}

/* CREATE / UPDATE HERO */
export const saveHero = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, phone, imageUrl } = req.body

    let hero = await Hero.findOne()

    if (hero) {
      hero.title = title
      hero.description = description
      hero.phone = phone
      hero.imageUrl = imageUrl

      await hero.save()
      res.json(hero)
      return
    }

    hero = new Hero({ title, description, phone, imageUrl })
    await hero.save()
    res.json(hero)

  } catch (error) {
    res.status(500).json({ message: "Server error" })
  }
}