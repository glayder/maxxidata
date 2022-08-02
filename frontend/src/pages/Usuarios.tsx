import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";


import Box from '@mui/material/Box';
import api from '../service/api';
import { Container, Grid, List, ListItem, ListItemButton } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import CadastroUsuario from '../components/CadastroUsuario';
import CadastroTipoProfissao from '../components/CadastroTipoProfissao';

type Usuario = {
  createdAt: string;
  email: string;
  id: string;
  name: string;
  situacao: true;
  telefone: string;
  tipoDeProfissional: TipoProfissional;
  tipoDeProfissional_id: string;
  updatedAt: string;
}

type TipoProfissional = {
  id: string;
  descricao: string;
  situacao: true;
  updatedAt: string;
  createdAt: string;
}


export function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [profissao, setProfissao] = useState<TipoProfissional[]>([]);

  useEffect(() => {
    obterUsuarios()
    obterTipoProfissao()
  }, [])

  const obterUsuarios = () => {
    api.get("/users").then((i) => {
      setUsuarios(i.data)
    })
  }

  const obterTipoProfissao = () => {
    api.get("/profissao").then((i) => {
      setProfissao(i.data)
    })
  }

  return (
    <Grid container justifyContent="center">




        <Box>
          <nav aria-label="secondary mailbox folders">
            {usuarios.map(usuario => {
              return (
                <List key={usuario.id}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText>{usuario.name} {usuario.tipoDeProfissional.descricao}</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              )
            })}

          </nav>

          <CadastroUsuario
            obterUsuarios={obterUsuarios}
            profissao={profissao}
            obterTipoProfissao={obterTipoProfissao}>
          </CadastroUsuario>

          <CadastroTipoProfissao
            obterTipoProfissao={obterTipoProfissao}>
          </CadastroTipoProfissao>
        </Box>

    </Grid>
  );
}
