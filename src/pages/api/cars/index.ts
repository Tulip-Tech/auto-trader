import { NextApiRequest, NextApiResponse } from 'next';

import httpProxy from 'http-proxy';

const API_URL = 'https://autotrader.co.uk/json/dealers/stock';

const proxy = httpProxy.createProxyServer();

// Make sure that we don't parse JSON bodies on this route:
export const config = {
    api: {
        bodyParser: false,
    },
};

export default function cars(req: NextApiRequest, res: NextApiResponse) {
    req.url = `${req.url?.replace('/api/cars', '')}`;
    return new Promise<void>((resolve, reject) => {
        return proxy.web(req, res, { target: API_URL, changeOrigin: true }, (err: any) => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}
