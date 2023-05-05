export class Workstation {
    name?: string;
    code?: string;
    shortName?: string;
    dependentPlace?: any;
    address?: string;
    city?: any;
    district?: any;
    ward?: any;
    descr?: string;
    status?: any;
    content?: Workstation[];
    constructor(name, code, shortName, dependentPlace, address, city, district, ward, descr, status) {
        this.name = name;
        this.code = code;
        this.shortName = shortName;
        this.dependentPlace = dependentPlace;
        this.address = address;
        this.city = city;
        this.district = district;
        this.ward = ward;
        this.descr = descr;
        this.status = status;
    }
}

export const WORKSTATION: Workstation[] = [
    {
        name: 'Văn phòng',
        code: 'VP',
        content: [
            {
                name: 'Văn phòng 40',
                code: 'HW40',
                shortName: 'VP Head',
                dependentPlace: 'Văn phòng',
                address: '40 đường số 14',
                city: 'Tp.Hồ Chí Minh',
                district: 'Quận Gò Vấp',
                ward: 'Phường 5',
                descr: '',
                status: 'Đang áp dụng'
            },
            {
                name: 'Văn phòng 42',
                code: 'LO04',
                shortName: 'VP Head',
                dependentPlace: 'Văn phòng',
                address: '40 đường số 14',
                city: 'Tp.Hồ Chí Minh',
                district: 'Quận Gò Vấp',
                ward: 'Phường 5',
                descr: '',
                status: 'Đang áp dụng'
            },
        ]
    },
    {

        name: 'Kho',
        code: 'DP',
        content: [
            {
                name: 'Kho 42',
                code: 'DP01',
                shortName: 'VP Head',
                dependentPlace: 'Kho',
                address: '40 đường số 14',
                city: 'Tp.Hồ Chí Minh',
                district: 'Quận Gò Vấp',
                ward: 'Phường 5',
                descr: '',
                status: 'Đang áp dụng'
            },
            {
                name: 'Kho online',
                code: 'ON01',
                shortName: 'VP Head',
                dependentPlace: 'Kho',
                address: '40 đường số 14',
                city: 'Tp.Hồ Chí Minh',
                district: 'Quận Gò Vấp',
                ward: 'Phường 5',
                descr: '',
                status: 'Đang áp dụng'
            },
        ]
    },

]