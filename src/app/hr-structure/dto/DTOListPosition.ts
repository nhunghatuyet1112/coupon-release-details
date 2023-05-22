
export class ListPosition {
    DepartmentCode?: null;
    ReportToCode?: null;
    GroupPositionCode?: null;
    StatusName?: null;
    ListChild?: null;
    Code?: number;
    PositionID?: string;
    Position?: string;
    IsLeader?: boolean;
    DepartmentID?: number;
    ReportTo?: null;
    GroupPosition?: null;
    Remark?: null;
    OrderBy?: null;
    ListOfRoles?: null;
    Config?: null;
    StatusID?: number;

    constructor() {
        this.Code = 0;
        this.DepartmentCode = null;
        this.ReportToCode = null;
        this.GroupPositionCode = null;
        this.StatusName = null;
        this.ListChild = null;
        this.PositionID = '';
        this.Position = '';
        this.DepartmentID = 0;
        this.IsLeader = false;
        this.ReportTo = null;
        this.GroupPosition = null;
        this.Remark = null;
        this.OrderBy = null;
        this.ListOfRoles = null;
        this.Config = null;
        this.StatusID = 0;
    }
}