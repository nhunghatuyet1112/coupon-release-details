import { ListPosition } from "./DTOListPosition";

export class ListDepartmentStructure {
    StatusName?: string;
    ParentCode?: null;
    ListLocationCode?: null;
    ListLocation?: [];
    ListDepartment?: ListDepartmentStructure[];
    ListPosition?: ListPosition[];
    Code?: number;
    ParentID?: number;
    DepartmentID?: any;
    Department?: string;
    Brieft?: null;
    Phone?: null;
    Fax?: null;
    Remark?: null;
    Config?: null;
    TypeData?: number;
    OrderBy?: null;
    StatusID?: number;

    constructor() {
        this.StatusName = '';
        this.ParentCode = null;
        this.ListLocationCode = null;
        this.ListLocation = [];
        this.ListDepartment = [];
        this.ListPosition = [];
        this.Code = 0;
        this.ParentID = 0;
        this.DepartmentID = '';
        this.Department = '';
        this.Brieft = null;
        this.Phone = null;
        this.Fax = null;
        this.Remark = null;
        this.Config = null;
        this.TypeData = 1;
        this.OrderBy = null;
        this.StatusID = 0;
    }
}