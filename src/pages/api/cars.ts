import type { NextApiRequest, NextApiResponse } from 'next'
import { allBranchesCars, TCars } from '@/services/cars';

async function cars(req: NextApiRequest, res: NextApiResponse) {
    let response: {
        props: {
            cars: TCars['stockResponse']
        },
    }
    if (req.query.slug) {
        response = await allBranchesCars(req.query)
    } else {
        response = await allBranchesCars(req.query)
    }
    return res.send(response.props.cars)
}

export const config = {
    api: {
        externalResolver: true,
    },
}

export default cars
