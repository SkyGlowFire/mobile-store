import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'

import phones from './phones'
import phonesPage from './phonesPage'

export default history => combineReducers({
    router: connectRouter(history),
    phones,
    phonesPage
})