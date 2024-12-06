// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import 'colors';
import type {NextApiRequest, NextApiResponse} from 'next'


const Client: Record<string, Function> = {
    'test': async (params: {
        page: number,
        size: number,
        token: string,
    }, req: NextApiRequest, res: NextApiResponse<any>) => {
        return Response.json({code: 0, message: 'success', data: {result: true}})
    },
}

 function handler_(
    req: Request,
    res: Response
) {
    const {searchParams, pathname} = new URL(req.url)
    let query = Object.fromEntries(searchParams.entries());
    let path = pathname.replace('/api/', '');
    if (Client[`${path}`]) {
        return Client[`${path}`]({
            ...query ?? {},
            ...req.body ?? {},
        }, req, res);
    } else {
        return Response.json({errno: 1, msg: 'path not support'})
    }
}

export function GET(
    req: Request,
    res: Response
) {
    return handler_(req, res)
}

export function POST(
    req: Request,
    res: Response
) {
    return handler_(req, res)
}
