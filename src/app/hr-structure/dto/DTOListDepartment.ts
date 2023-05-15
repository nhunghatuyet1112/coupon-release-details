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
}