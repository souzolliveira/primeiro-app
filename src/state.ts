import {createStore} from 'react-hooks-global-state';
import { statement } from '@babel/template';

type Action = 
  |  { type: 'setGeolocation'; geolocationNome: string; geolocationIBGE: string}
  |  { type: 'addMunicipio'; favoritos: [{ codigoIBGE: string, nome: string, uf: string}]}
  |  { type: 'setMunicipio'; municipioNome: string; codigoIBGE: string}
  |  { type: 'setCultura'; culturaNome: string; culturaID: string}
  |  { type: 'addCultura'; culturas: [{ id: string, cultura: string}]}
  |  { type: 'setCiclo'; cicloNome: string; cicloID: string}
  |  { type: 'setTextura'; texturaNome: string; texturaID: string}
  |  { type: 'count'; count: number}

  export const { GlobalStateProvider, dispatch, useGlobalState } = createStore(
    (state, action: Action) => {
      switch (action.type) {
        case 'setGeolocation': return {
          ...state,
          geolocationNome: action.geolocationNome,
          geolocationIBGE: action.geolocationIBGE,
        };
        case 'addMunicipio': return {
          ...state,
          favoritos: action.favoritos,
        };        
        case 'count': return {
          ...state,
          count: state.count + 1,
        };
        case 'setMunicipio': return {
            ...state,
            municipioNome: action.municipioNome,
            codigoIBGE: action.codigoIBGE,
        };
        case 'setCultura': return {
            ...state,
            culturaNome: action.culturaNome,
            culturaID: action.culturaID,
        };
        case 'addCultura': return {
          ...state,
          culturas: action.culturas,
      };
        case 'setCiclo': return {
            ...state,
            cicloNome: action.cicloNome,
            cicloID: action.cicloID,
        };
        case 'setTextura': return {
            ...state,
            texturaNome: action.texturaNome,
            texturaID: action.texturaID,
        };
        default: return state;
      }
    },
    {
      geolocationNome: '',
      geolocationIBGE: '',

      favoritos: [{
        codigoIBGE: '', 
        nome: '', 
        uf: ''
      }],
      count: 0,

      municipioNome: '',
      codigoIBGE: '',

      culturaNome: '',
      culturaID: '',

      culturas: [{
        id: '',
        cultura: '',
      }],

      cicloNome: '',
      cicloID: '',

      texturaNome: '',
      texturaID: '',
    },
  );