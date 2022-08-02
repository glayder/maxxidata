import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormControl, FormControlLabel, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import api from '../service/api';

export default function CadastroTipoProfissao({ obterTipoProfissao }: any) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    api.post('/profissao', data).then(() => {
      handleClose()
      obterTipoProfissao()
    })
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Cadastrar Tipo de Profissão
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar Tipo de Profissão</DialogTitle>
        <DialogContent>
          <FormControl onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              margin="dense"
              label="Descricao"
              type="descricao"
              fullWidth
              variant="standard"
              {...register("descricao", { required: true })}
            />
            {errors.descricao && <span>This field is required</span>}

            <FormControlLabel
              control={
                <Checkbox
                  {...register("situacao")}
                />
              }
              label="Ativo" />

          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button type="submit" onClick={handleSubmit(onSubmit)}>Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
