"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Presidente_1 = require("./Presidente");
const Governador_1 = require("./Governador");
const DeputadoFederal_1 = require("./DeputadoFederal");
const DeputadoEstadual_1 = require("./DeputadoEstadual");
const Senador_1 = require("./Senador");
const presidente = new Presidente_1.Presidente("Luiz Inácio Lula da Silva", "PT", "Federal", "Executivo", "Brasília - DF", "Palácio do Planalto", 46366.19, 38);
const governadoraPE = new Governador_1.Governador("Raquel Lyra", "PSD", "Estadual", "Executivo", "Palácio do Campo das Princesas", 'Recife - PE', 22000, "Pernambuco", 30);
const governadorBA = new Governador_1.Governador("Jerônimo Rodrigues", "PT", "Estadual", "Executivo", "Centro Administrativo da Bahia", 'Salavador - BA', 36.894, "Bahia", 26);
const deputadoFederalPE1 = new DeputadoFederal_1.DeputadoFederal("Eduardo da Fonte", "PP", "Federal", "Legislativo", "Câmara dos Deputados", 'Brasilia - DF', 46366.19, "União Progressista");
const deputadoFederalPE2 = new DeputadoFederal_1.DeputadoFederal("Felipe Carreras", "PSB", "Federal", "Legislativo", "Câmara dos Deputados", 'Brasilia - DF', 46366.19, "PSB");
const deputadoFederalPE3 = new DeputadoFederal_1.DeputadoFederal("Pedro Campos", "PSB", "Federal", "Legislativo", "Câmara dos Deputados", 'Brasilia - DF', 46366.19, "PSB");
const deputadoFederalSP = new DeputadoFederal_1.DeputadoFederal("Tabata Amaral", "PSB", "Federal", "Legislativo", "Câmara dos Deputados", 'Brasilia - DF', 46366.19, "PSB");
const deputadoFederalMG = new DeputadoFederal_1.DeputadoFederal("Nikolas Ferreira", "PL", "Federal", "Legislativo", "Câmara dos Deputados", 'Brasilia - DF', 46366.19, "PL");
const deputadoEstadualPE1 = new DeputadoEstadual_1.DeputadoEstadual("Álvaro Porto", "PSDB", "Estadual", "Legislativo", "ALEPE", 'Recife - PE', 34.774, "Pernambuco");
const deputadoEstadualPE2 = new DeputadoEstadual_1.DeputadoEstadual("João Paulo", "PT", "Estadual", "Legislativo", "ALEPE", 'Recife - PE', 34.774, "Pernambuco");
deputadoEstadualPE2.setListaComissoes([
    "Comissão de Constituição", "Legislação e Justiça (CCLJ)"
]);
const deputadoEstadualPE3 = new DeputadoEstadual_1.DeputadoEstadual("Aglailson Victor", "PSB", "Estadual", "Legislativo", "ALEPE", 'Recife - PE', 34.774, "Pernambuco");
const deputadoEstadualSP = new DeputadoEstadual_1.DeputadoEstadual("Guilherme Cortez", "PSOL", "Estadual", "Legislativo", "ALESP", "São Paulo/SP", 34.774, "São Paulo");
deputadoEstadualSP.setListaComissoes([
    "Comissão de Administração Pública",
    "Comissão de Meio Ambiente e Desenvolvimento Sustentável"
]);
const deputadoEstadualSC = new DeputadoEstadual_1.DeputadoEstadual("Ana Caroline Campagnolo", "PL", "Estadual", "Legislativo", "ALESC", "Florianopolis/SC", 34.774, "Santa Catarina");
deputadoEstadualSC.setListaComissoes([
    "Comissão de Constituição e Justiça (CCJ)",
    "Comissão de Educação e Cultura"
]);
const senadorPE1 = new Senador_1.Senador("Fernando Dueire", "MDB", "Federal", "Legislativo", "Senado Federal", "Brasília/DF", 46366.19, "Pernambuco", 2023);
const senadorPE2 = new Senador_1.Senador("Teresa Leitão", "PT", "Federal", "Legislativo", "Senado Federal", "Brasília/DF", 46366.19, "Pernambuco", 2022);
const senadorRJ = new Senador_1.Senador("Flávio Bolsonaro", "PL", "Federal", "Legislativo", "Senado Federal", "Brasília/DF", 46366.19, "Rio de Janeiro", 2018);
//console.log("Presidente:", presidente.getNome(), "-", presidente.getPartido(), "-", presidente.getEsfera(), "-", presidente.getPoder());
//console.log("Governadora de Pernambuco:", governadoraPE.getNome(), "-", governadoraPE.getPartido(), "-", governadoraPE.getEsfera(), "-", governadoraPE.getPoder());
//console.log("Governador da Bahia:", governadorBA.getNome(), "-", governadorBA.getPartido(), "-", governadorBA.getEsfera(), "-", governadorBA.getPoder());
//console.log("Deputado Federal de Pernambuco 1:", deputadoFederalPE1.getNome(), "-", deputadoFederalPE1.getPartido(), "-", deputadoFederalPE1.getEsfera(), "-", deputadoFederalPE1.getPoder());
//console.log("Deputado Federal de Pernambuco 2:", deputadoFederalPE2.getNome(), "-", deputadoFederalPE2.getPartido(), "-", deputadoFederalPE2.getEsfera(), "-", deputadoFederalPE2.getPoder());
//console.log("Deputado Federal de Pernambuco 3:", deputadoFederalPE3.getNome(), "-", deputadoFederalPE3.getPartido(), "-", deputadoFederalPE3.getEsfera(), "-", deputadoFederalPE3.getPoder());
//console.log("Deputado Federal de São Paulo:", deputadoFederalSP.getNome(), "-", deputadoFederalSP.getPartido(), "-", deputadoFederalSP.getEsfera(), "-", deputadoFederalSP.getPoder());
//console.log("Deputado Federal de Minas Gerais:", deputadoFederalMG.getNome(), "-", deputadoFederalMG.getPartido(), "-", deputadoFederalMG.getEsfera(), "-", deputadoFederalMG.getPoder());
//console.log("Deputado Estadual de Pernambuco 1:", deputadoEstadualPE1.getNome(), "-", deputadoEstadualPE1.getPartido(), "-", deputadoEstadualPE1.getEsfera(), "-", deputadoEstadualPE1.getPoder());
//console.log("Deputado Estadual de Pernambuco 2:", deputadoEstadualPE2.getNome(), "-", deputadoEstadualPE2.getPartido(), "-", deputadoEstadualPE2.getEsfera(), "-", deputadoEstadualPE2.getPoder(), "-", "Comissões:", deputadoEstadualPE2.getListaComissoes().join(", "));
//console.log("Deputado Estadual de Pernambuco 3:", deputadoEstadualPE3.getNome(), "-", deputadoEstadualPE3.getPartido(), "-", deputadoEstadualPE3.getEsfera(), "-", deputadoEstadualPE3.getPoder());
//console.log("Deputado Estadual de São Paulo:", deputadoEstadualSP.getNome(), "-", deputadoEstadualSP.getPartido(), "-", deputadoEstadualSP.getEsfera(), "-", deputadoEstadualSP.getPoder(), "-", "Comissões:", deputadoEstadualSP.getListaComissoes().join(", "));
//console.log("Deputado Estadual de Santa Catarina:", deputadoEstadualSC.getNome(), "-", deputadoEstadualSC.getPartido(), "-", deputadoEstadualSC.getEsfera(), "-", deputadoEstadualSC.getPoder(), "-", "Comissões:", deputadoEstadualSC.getListaComissoes().join(", "));
//console.log("Senador de Pernambuco 1:", senadorPE1.getNome(), "-", senadorPE1.getPartido(), "-", senadorPE1.getEsfera(), "-", senadorPE1.getPoder());
//console.log("Senador de Pernambuco 2:", senadorPE2.getNome(), "-", senadorPE2.getPartido(), "-", senadorPE2.getEsfera(), "-", senadorPE2.getPoder());
//console.log("Senador do Rio de Janeiro:", senadorRJ.getNome(), "-", senadorRJ.getPartido(), "-", senadorRJ.getEsfera(), "-", senadorRJ.getPoder());
//deputadoFederalPE1.exercerMandato();
//# sourceMappingURL=index.js.map