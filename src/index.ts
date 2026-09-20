import { Presidente } from "./Presidente";
import { Governador } from "./Governador";
import { DeputadoFederal } from "./DeputadoFederal";
import { DeputadoEstadual } from "./DeputadoEstadual";
import { Senador } from "./Senador";

const presidente = new Presidente(
    "Luiz Inácio Lula da Silva",
    "PT",
    "Federal",
    "Executivo",
    "Brasília - DF",
    "Palácio do Planalto",
    46366.19,
    38
);

const governadoraPE = new Governador(
    "Raquel Lyra",
    "PSD",
    "Estadual",
    "Executivo",
    "Palácio do Campo das Princesas",
    'Recife - PE',
    22000,
    "Pernambuco",
    30
);

const governadorBA = new Governador(
    "Jerônimo Rodrigues",
    "PT",
    "Estadual",
    "Executivo",
    "Centro Administrativo da Bahia",
    'Salavador - BA',
    36.894,
    "Bahia",
    26
);

const deputadoFederalPE1 = new DeputadoFederal(
    "Eduardo da Fonte",
    "PP",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    'Brasilia - DF',
    46366.19,
    "União Progressista"
);

const deputadoFederalPE2 = new DeputadoFederal(
    "Felipe Carreras",
    "PSB",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    'Brasilia - DF',
    46366.19,
    "PSB"
);

const deputadoFederalPE3 = new DeputadoFederal(
    "Pedro Campos",
    "PSB",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    'Brasilia - DF',
    46366.19,
    "PSB"
);

const deputadoFederalSP = new DeputadoFederal(
    "Tabata Amaral",
    "PSB",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    'Brasilia - DF',
    46366.19,
    "PSB"
);

const deputadoFederalMG = new DeputadoFederal(
    "Nicolas Ferreira",
    "PL",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    'Brasilia - DF',
    46366.19,
    "PL"
);

const deputadoEstadualPE1 = new DeputadoEstadual(
    "Álvaro Porto",
    "PSDB",
    "Estadual",
    "Legislativo",
    "ALEPE",
    'Recife - PE',
    34.774,
    "Pernambuco"
);

const deputadoEstadualPE2 = new DeputadoEstadual(
    "João Paulo",
    "PT",
    "Estadual",
    "Legislativo",
    "ALEPE",
    'Recife - PE',
    34.774,
    "Pernambuco"
);

const deputadoEstadualPE3 = new DeputadoEstadual(
    "Aglailson Victor",
    "PSB",
    "Estadual",
    "Legislativo",
    "ALEPE",
    'Recife - PE',
    34.774,
    "Pernambuco"
);

const deputadoEstadualSP1 = new DeputadoEstadual(
    "Guilherme Cortez",
    "PSOL",
    "Estadual",
    "Legislativo",
    "ALESP",
    "São Paulo/SP",
    34.774,
    "São Paulo"
);

const deputadoEstadualSC1 = new DeputadoEstadual(
    "Ana Caroline Campagnolo",
    "PL",
    "Estadual",
    "Legislativo",
    "ALESC",
    "Florianopolis/SC",
    34.774,
    "Santa Catarina",
);

const senadorPE1 = new Senador(
    "Fernando Dueire",
    "MDB",
    "Federal",
    "Legislativo",
    "Pernambuco",
    "Senado Federal - Brasília/DF",
    46366.19,
    "Pernambuco",
    2023
);

const senadorPE2 = new Senador(
    "Teresa Leitão",
    "PT",
    "Federal",
    "Legislativo",
    "Pernambuco",
    "Senado Federal - Brasília/DF",
    46366.19,
    "Pernambuco",
    2022
);

const senadorBA = new Senador(
    "Otto Alencar",
    "PSD",
    "Federal",
    "Legislativo",
    "Bahia",
    "Senado Federal - Brasília/DF",
    46366.19,
    "Bahia",
    2022
);