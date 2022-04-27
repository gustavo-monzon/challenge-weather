
import BUENOS_AIRES from '../images/buenos-aires.jpg'
import CORDOBA from '../images/cordoba.jpg'
import CURRENT_LOCATION from '../images/current-location.png'
import SANTA_CRUZ from '../images/santa-cruz.jpg'
import SANTA_FE from '../images/santa-fe.jpg'
import TUCUMAN from '../images/tucuman.jpg'

const locations = Object.freeze([
    {
        id: 1,
        loc: {
            name: null,
            lat: null,
            lon: null,
        },
        img: CURRENT_LOCATION,
    },
    {
        id: 2,
        loc: {
            name: 'buenos aires,ar',
            lat: '-34.603722',
            lon: '-58.381592',
        },
        img: BUENOS_AIRES,
    },
    {
        id: 3,
        loc: {
            name: 'cordoba,ar',
            lat: '-31.4135',
            lon: '-64.18105',
        },
        img: CORDOBA,
    },
    {
        id: 4,
        loc: {
            name: 'santa cruz,ar',
            lat: '-48.7736',
            lon: '-69.1917',
        },
        img: SANTA_CRUZ,
    },
    {
        id: 5,
        loc: {
            name: 'santa fe,ar',
            lat: '-32.95',
            lon: '-60.66',
        },
        img: SANTA_FE,
    },
    {
        id: 6,
        loc: {
            name: 'tucuman,ar',
            lat: '-26.80',
            lon: '-65.21',
        },
        img: TUCUMAN,
    },
])

export default locations;