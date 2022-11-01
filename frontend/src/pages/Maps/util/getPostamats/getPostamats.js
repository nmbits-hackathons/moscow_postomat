import pick from 'lodash/pick'
import get from 'lodash/get'
export const getPostamatsForData = (data) => {
    return data
        .map(el => ({ ...pick(el, ['id', 'title', 'description']), ...pick(get(el, 'placement'), ['coordinates', 'address_string'])}))
}
