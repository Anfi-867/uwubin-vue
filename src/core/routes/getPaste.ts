import { Request, Response } from 'express';
import { default as PasteEntity } from '../db/models/PasteEntity';

const getPaste = async (req: Request, res: Response) => {
    if (!req.params.id)
        return res.status(401).json({
            success: false,
            message: 'No id was provided in the request parameters. ',
        });

    PasteEntity.findOne({ id: req.params.id }).then(async (d) => {
        if (!d)
            return res.status(400).json({
                success: false,
                message: 'Paste not found.',
            });

        const json = d.toJSON();

        const data: {
            paste: string;
            id: string;
            createdAt: string;
            success: boolean;
        } = {
            paste: json.paste,
            id: req.params.id,
            createdAt: new Date().toLocaleString(),
            success: true,
        };

        return res.status(200).json(data);
    });
};

export default getPaste;
