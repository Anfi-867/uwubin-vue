import { Request, Response } from 'express';
import { default as PasteEntity } from '../db/models/PasteEntity';

const deletePaste = async (req: Request, res: Response) => {
    if (!req.params.id)
        return res.status(401).json({
            success: false,
            message: 'No id was provided in the request parameters. ',
        });

    if (!req.headers.authorization)
        return res.status(401).json({
            success: false,
            message: 'No key was provided in the authorization headers. ',
        });

    PasteEntity.findOne({ id: req.params.id }).then(async (d) => {
        if (!d)
            return res.status(400).json({
                success: false,
                message: 'Paste not found.',
            });

        const json = d.toJSON();

        if (json.ownerKey !== req.headers.authorization) {
            return res.status(401).json({
                success: false,
                message: 'Incorrect owner key.',
            });
        }

        await d.remove();

        return res.status(200).json({
            success: true,
            message: `Deleted paste ${json.id}`,
        });
    });
};

export default deletePaste;
