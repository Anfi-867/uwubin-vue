import { Router } from 'express';

// Endpoints
import { default as createPaste } from './createPaste';
import { default as getPaste } from './getPaste';
import { default as deletePaste } from './deletePaste';
import { default as editPaste } from './editPaste';

export default Router()
    .post('/api/v1/create', createPaste)
    .get('/api/v1/get/:id', getPaste)
    .delete('/api/v1/delete/:id', deletePaste)
    .put('/api/v1/edit/:id/', editPaste);
