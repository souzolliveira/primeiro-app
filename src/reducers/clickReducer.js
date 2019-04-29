import { SET_GEOLOCATION, ADD_MUNICIPIO, SET_MUNICIPIO, SET_CULTURA, SET_CICLO, SET_TEXTURA } from '../actions/actionTypes';

const initialState = {
  geolocationNome: '', //lembrar para localização
  geolocationIBGE: '', //lembrar para localização

  municipioNome: '', //imprimir no zoneamento
  codigoIBGE: '', //marcar na localização e fazer requisição da API no zoneamento

  favoritos: [{
    codigoIBGE: '',
    nome: '',
    uf: '',
  }], //array dos favoritos na localização

  culturaNome: '', //imprimir no zoneamento
  culturaID: '', //fazer requisição da API no zoneamento e marcar radio na cultura

  cicloNome: '', //imprimir e filtrar pesquisa no zoneamento
  cicloID: '', //marcar no ciclo

  texturaNome: '', //imprimir e filtrar pesquisa no zoneamento
  texturaID: '', //marcar na textura
};

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {
        ...state,
        geolocationNome: action.geolocationNome,
        geolocationIBGE: action.geolocationIBGE,
      };
    case ADD_MUNICIPIO:
      return {
        ...state,
        favoritos: action.favoritos,
      };
    case SET_MUNICIPIO:
      return {
        ...state,
        municipioNome: action.municipioNome,
        codigoIBGE: action.codigoIBGE
      };
    case SET_CULTURA:
      return {
        ...state,
        culturaNome: action.culturaNome,
        culturaID: action.culturaID,
      };
    case SET_CICLO:
      return {
        ...state,
        cicloNome: action.cicloNome,
        cicloID: action.cicloID,
      };
    case SET_TEXTURA:
      return {
        ...state,
        texturaNome: action.texturaNome,
        texturaID: action.texturaID,
      };
    default:
      return state;
  }
}