// import config from '../../config/default';
import User from '../models/User';

// const endpoint = config.authApiEndpoint;


export function getUserInformation(id: string): Promise<User> {
    const user: User = {
        Email: 'christophstach@gmail.com',
        FamilyName: 'Stach',
        GivenName: 'Christoph',
        Id: '123',
        Name: 'Christoph Stach',
        Picture: 'https://lh3.googleusercontent.com/ogw/ADGmqu_LAiPFriWMGuKW5z_EFMr5b_4SZOgSvX5U3SD_BMQ=s32-c-mo'
    }

    return Promise.resolve(user);
}
