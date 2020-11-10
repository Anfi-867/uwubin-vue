import { Request, Response } from 'express';
import { v4 as uuid } from 'uuid';
import { default as PasteEntity } from '../db/models/PasteEntity';

const createPaste = async (req: Request, res: Response) => {
    if (!req.body.paste)
        return res.status(400).json({
            success: false,
            message: 'No paste was provided in the request body. ',
        });

    const data: {
        paste: string;
        ownerKey: string;
        id: string;
        createdAt: string;
        success: boolean;
    } = {
        paste: req.body.paste,
        id: uuid(),
        ownerKey: uuid(), // TODO: Make this more secure, lazy fuck.
        createdAt: new Date().toLocaleString(),
        success: true,
    };

    (await PasteEntity.create(data)).save();

    return res.status(200).json(data);
};

export default createPaste;
