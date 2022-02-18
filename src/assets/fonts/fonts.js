import { createGlobalStyle } from 'styled-components';

import SuperMario from './SuperMarioBros-ov7d.ttf';


export default createGlobalStyle`
    @font-face {
        font-family: 'SuperMario';
        src: local('SuperMario'), 
        url(${SuperMario}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
