import express, { Request, Response, NextFunction } from 'express'

export const validateBook = (req: Request, res: Response, next: NextFunction): void => {
    const {titulo, autor, anio} = req.body
    if (!titulo || typeof titulo !== 'string') {
        res.status(400).json({error: "El campo 'titulo' es requerido y debe ser string"})
        return
    }
    if (!autor || typeof autor !== 'string') {
        res.status(400).json({error: "El campo 'autor' es requerido y debe ser string"})
        return
    }
    if (!anio || typeof anio !== 'number') {
        res.status(400).json({error: "El campo 'anio' es requerido y debe ser number"})
        return
    }
    next()
}