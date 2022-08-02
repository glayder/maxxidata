import { useEffect, useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormControl, FormControlLabel, MenuItem } from '@mui/material';
import { useForm } from 'react-hook-form';
import api from '../service/api';


type TipoProfissional = {
  id: string;
  descricao: string;
  situacao: true;
  updatedAt: string;
  createdAt: string;
}


export default function CadastroUsuario({ obterUsuarios, profissao, obterTipoProfissao }: any) {

  const [open, setOpen] = useState(false);
  const [tipoProfissao, setTipoProfissao] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    data = { ...data, tipoProfissao }
    console.log(data)
    api.post('/users', data).then((i) => {

      obterUsuarios()
      obterTipoProfissao()

      handleClose()
    })
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Cadastrar Usuários
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Cadastrar Usuário</DialogTitle>
        <DialogContent>
          <FormControl onSubmit={handleSubmit(onSubmit)}>
            <TextField
              autoFocus
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}

            <TextField
              autoFocus
              margin="dense"
              label="name"
              type="name"
              fullWidth
              variant="standard"
              {...register("name", { required: true })}
            />

            {errors.name && <span>This field is required</span>}

            <TextField
              autoFocus
              margin="dense"
              label="telefone"
              type="telefone"
              fullWidth
              variant="standard"
              {...register("telefone", { required: true })}
            />
            {errors.telefone && <span>This field is required</span>}

            <FormControlLabel
              control={
                <Checkbox
                  {...register("situacao")}
                />
              }
              label="Ativo" />

            <TextField
              select
              label="Tipo de Profissão"
              variant="filled"
              required
              value={tipoProfissao}
              onChange={e => setTipoProfissao(e.target.value)}
            >
              {profissao.map((person: TipoProfissional) => (
                <MenuItem key={person.id} value={person.id}>
                  {person.descricao}
                </MenuItem>
              ))}
            </TextField>

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
