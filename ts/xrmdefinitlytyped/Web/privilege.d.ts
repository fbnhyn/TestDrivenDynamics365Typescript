interface Privilege_Base extends WebEntity {
  accessright?: number | null;
  canbebasic?: boolean | null;
  canbedeep?: boolean | null;
  canbeentityreference?: boolean | null;
  canbeglobal?: boolean | null;
  canbelocal?: boolean | null;
  canbeparententityreference?: boolean | null;
  componentstate?: componentstate | null;
  introducedversion?: string | null;
  isdisabledwhenintegrated?: boolean | null;
  ismanaged?: boolean | null;
  name?: string | null;
  overwritetime?: Date | null;
  privilegeid?: string | null;
  privilegerowid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface Privilege_Relationships {
  ChannelAccessProfile_Privilege?: ChannelAccessProfile_Result[] | null;
  FK_PrivilegeObjectTypeCodes?: PrivilegeObjectTypeCodes_Result[] | null;
  Privilege_AsyncOperations?: AsyncOperation_Result[] | null;
  Privilege_BulkDeleteFailures?: BulkDeleteFailure_Result[] | null;
  roleprivileges_association?: Role_Result[] | null;
  roletemplateprivileges_association?: RoleTemplate_Result[] | null;
  solution_privilege?: Solution_Result | null;
  userentityinstancedata_privilege?: UserEntityInstanceData_Result[] | null;
}
interface Privilege extends Privilege_Base, Privilege_Relationships {
}
interface Privilege_Create extends Privilege {
}
interface Privilege_Update extends Privilege {
}
interface Privilege_Select {
  accessright: WebAttribute<Privilege_Select, { accessright: number | null }, {  }>;
  canbebasic: WebAttribute<Privilege_Select, { canbebasic: boolean | null }, {  }>;
  canbedeep: WebAttribute<Privilege_Select, { canbedeep: boolean | null }, {  }>;
  canbeentityreference: WebAttribute<Privilege_Select, { canbeentityreference: boolean | null }, {  }>;
  canbeglobal: WebAttribute<Privilege_Select, { canbeglobal: boolean | null }, {  }>;
  canbelocal: WebAttribute<Privilege_Select, { canbelocal: boolean | null }, {  }>;
  canbeparententityreference: WebAttribute<Privilege_Select, { canbeparententityreference: boolean | null }, {  }>;
  componentstate: WebAttribute<Privilege_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  introducedversion: WebAttribute<Privilege_Select, { introducedversion: string | null }, {  }>;
  isdisabledwhenintegrated: WebAttribute<Privilege_Select, { isdisabledwhenintegrated: boolean | null }, {  }>;
  ismanaged: WebAttribute<Privilege_Select, { ismanaged: boolean | null }, {  }>;
  name: WebAttribute<Privilege_Select, { name: string | null }, {  }>;
  overwritetime: WebAttribute<Privilege_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  privilegeid: WebAttribute<Privilege_Select, { privilegeid: string | null }, {  }>;
  privilegerowid: WebAttribute<Privilege_Select, { privilegerowid: string | null }, {  }>;
  solutionid: WebAttribute<Privilege_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<Privilege_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<Privilege_Select, { versionnumber: number | null }, {  }>;
}
interface Privilege_Filter {
  accessright: number;
  canbebasic: boolean;
  canbedeep: boolean;
  canbeentityreference: boolean;
  canbeglobal: boolean;
  canbelocal: boolean;
  canbeparententityreference: boolean;
  componentstate: componentstate;
  introducedversion: string;
  isdisabledwhenintegrated: boolean;
  ismanaged: boolean;
  name: string;
  overwritetime: Date;
  privilegeid: XQW.Guid;
  privilegerowid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface Privilege_Expand {
  ChannelAccessProfile_Privilege: WebExpand<Privilege_Expand, ChannelAccessProfile_Select, ChannelAccessProfile_Filter, { ChannelAccessProfile_Privilege: ChannelAccessProfile_Result[] }>;
  FK_PrivilegeObjectTypeCodes: WebExpand<Privilege_Expand, PrivilegeObjectTypeCodes_Select, PrivilegeObjectTypeCodes_Filter, { FK_PrivilegeObjectTypeCodes: PrivilegeObjectTypeCodes_Result[] }>;
  Privilege_AsyncOperations: WebExpand<Privilege_Expand, AsyncOperation_Select, AsyncOperation_Filter, { Privilege_AsyncOperations: AsyncOperation_Result[] }>;
  Privilege_BulkDeleteFailures: WebExpand<Privilege_Expand, BulkDeleteFailure_Select, BulkDeleteFailure_Filter, { Privilege_BulkDeleteFailures: BulkDeleteFailure_Result[] }>;
  roleprivileges_association: WebExpand<Privilege_Expand, Role_Select, Role_Filter, { roleprivileges_association: Role_Result[] }>;
  roletemplateprivileges_association: WebExpand<Privilege_Expand, RoleTemplate_Select, RoleTemplate_Filter, { roletemplateprivileges_association: RoleTemplate_Result[] }>;
  solution_privilege: WebExpand<Privilege_Expand, Solution_Select, Solution_Filter, { solution_privilege: Solution_Result }>;
  userentityinstancedata_privilege: WebExpand<Privilege_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_privilege: UserEntityInstanceData_Result[] }>;
}
interface Privilege_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface Privilege_Result extends Privilege_Base, Privilege_Relationships {
  "@odata.etag": string;
}
interface Privilege_RelatedOne {
  solution_privilege: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface Privilege_RelatedMany {
  ChannelAccessProfile_Privilege: WebMappingRetrieve<ChannelAccessProfile_Select,ChannelAccessProfile_Expand,ChannelAccessProfile_Filter,ChannelAccessProfile_Fixed,ChannelAccessProfile_Result,ChannelAccessProfile_FormattedResult>;
  FK_PrivilegeObjectTypeCodes: WebMappingRetrieve<PrivilegeObjectTypeCodes_Select,PrivilegeObjectTypeCodes_Expand,PrivilegeObjectTypeCodes_Filter,PrivilegeObjectTypeCodes_Fixed,PrivilegeObjectTypeCodes_Result,PrivilegeObjectTypeCodes_FormattedResult>;
  Privilege_AsyncOperations: WebMappingRetrieve<AsyncOperation_Select,AsyncOperation_Expand,AsyncOperation_Filter,AsyncOperation_Fixed,AsyncOperation_Result,AsyncOperation_FormattedResult>;
  Privilege_BulkDeleteFailures: WebMappingRetrieve<BulkDeleteFailure_Select,BulkDeleteFailure_Expand,BulkDeleteFailure_Filter,BulkDeleteFailure_Fixed,BulkDeleteFailure_Result,BulkDeleteFailure_FormattedResult>;
  roleprivileges_association: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
  roletemplateprivileges_association: WebMappingRetrieve<RoleTemplate_Select,RoleTemplate_Expand,RoleTemplate_Filter,RoleTemplate_Fixed,RoleTemplate_Result,RoleTemplate_FormattedResult>;
  userentityinstancedata_privilege: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  privileges: WebMappingRetrieve<Privilege_Select,Privilege_Expand,Privilege_Filter,Privilege_Fixed,Privilege_Result,Privilege_FormattedResult>;
}
interface WebEntitiesRelated {
  privileges: WebMappingRelated<Privilege_RelatedOne,Privilege_RelatedMany>;
}
interface WebEntitiesCUDA {
  privileges: WebMappingCUDA<Privilege_Create,Privilege_Update,Privilege_Select>;
}
