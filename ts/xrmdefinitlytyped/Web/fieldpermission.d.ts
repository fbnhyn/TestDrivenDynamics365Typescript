interface FieldPermission_Base extends WebEntity {
  attributelogicalname?: string | null;
  cancreate?: field_security_permission_type | null;
  canread?: field_security_permission_type | null;
  canupdate?: field_security_permission_type | null;
  componentstate?: componentstate | null;
  entityname?: string | null;
  fieldpermissionid?: string | null;
  fieldpermissionidunique?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface FieldPermission_Relationships {
  FieldPermission_SyncErrors?: SyncError_Result[] | null;
  solution_fieldpermission?: Solution_Result | null;
  userentityinstancedata_fieldpermission?: UserEntityInstanceData_Result[] | null;
}
interface FieldPermission extends FieldPermission_Base, FieldPermission_Relationships {
}
interface FieldPermission_Create extends FieldPermission {
  fieldsecurityprofileid_bind$fieldsecurityprofiles?: string | null;
}
interface FieldPermission_Update extends FieldPermission {
}
interface FieldPermission_Select {
  attributelogicalname: WebAttribute<FieldPermission_Select, { attributelogicalname: string | null }, {  }>;
  cancreate: WebAttribute<FieldPermission_Select, { cancreate: field_security_permission_type | null }, { cancreate_formatted?: string }>;
  canread: WebAttribute<FieldPermission_Select, { canread: field_security_permission_type | null }, { canread_formatted?: string }>;
  canupdate: WebAttribute<FieldPermission_Select, { canupdate: field_security_permission_type | null }, { canupdate_formatted?: string }>;
  componentstate: WebAttribute<FieldPermission_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entityname: WebAttribute<FieldPermission_Select, { entityname: string | null }, {  }>;
  fieldpermissionid: WebAttribute<FieldPermission_Select, { fieldpermissionid: string | null }, {  }>;
  fieldpermissionidunique: WebAttribute<FieldPermission_Select, { fieldpermissionidunique: string | null }, {  }>;
  fieldsecurityprofileid_guid: WebAttribute<FieldPermission_Select, { fieldsecurityprofileid_guid: string | null }, { fieldsecurityprofileid_formatted?: string }>;
  ismanaged: WebAttribute<FieldPermission_Select, { ismanaged: boolean | null }, {  }>;
  organizationid_guid: WebAttribute<FieldPermission_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  overwritetime: WebAttribute<FieldPermission_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<FieldPermission_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<FieldPermission_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<FieldPermission_Select, { versionnumber: number | null }, {  }>;
}
interface FieldPermission_Filter {
  attributelogicalname: string;
  cancreate: field_security_permission_type;
  canread: field_security_permission_type;
  canupdate: field_security_permission_type;
  componentstate: componentstate;
  entityname: string;
  fieldpermissionid: XQW.Guid;
  fieldpermissionidunique: XQW.Guid;
  fieldsecurityprofileid_guid: XQW.Guid;
  ismanaged: boolean;
  organizationid_guid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface FieldPermission_Expand {
  FieldPermission_SyncErrors: WebExpand<FieldPermission_Expand, SyncError_Select, SyncError_Filter, { FieldPermission_SyncErrors: SyncError_Result[] }>;
  fieldsecurityprofileid: WebExpand<FieldPermission_Expand, FieldSecurityProfile_Select, FieldSecurityProfile_Filter, { fieldsecurityprofileid: FieldSecurityProfile_Result }>;
  solution_fieldpermission: WebExpand<FieldPermission_Expand, Solution_Select, Solution_Filter, { solution_fieldpermission: Solution_Result }>;
  userentityinstancedata_fieldpermission: WebExpand<FieldPermission_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_fieldpermission: UserEntityInstanceData_Result[] }>;
}
interface FieldPermission_FormattedResult {
  cancreate_formatted?: string;
  canread_formatted?: string;
  canupdate_formatted?: string;
  componentstate_formatted?: string;
  fieldsecurityprofileid_formatted?: string;
  organizationid_formatted?: string;
  overwritetime_formatted?: string;
}
interface FieldPermission_Result extends FieldPermission_Base, FieldPermission_Relationships {
  "@odata.etag": string;
  fieldsecurityprofileid_guid: string | null;
  organizationid_guid: string | null;
}
interface FieldPermission_RelatedOne {
  fieldsecurityprofileid: WebMappingRetrieve<FieldSecurityProfile_Select,FieldSecurityProfile_Expand,FieldSecurityProfile_Filter,FieldSecurityProfile_Fixed,FieldSecurityProfile_Result,FieldSecurityProfile_FormattedResult>;
  solution_fieldpermission: WebMappingRetrieve<Solution_Select,Solution_Expand,Solution_Filter,Solution_Fixed,Solution_Result,Solution_FormattedResult>;
}
interface FieldPermission_RelatedMany {
  FieldPermission_SyncErrors: WebMappingRetrieve<SyncError_Select,SyncError_Expand,SyncError_Filter,SyncError_Fixed,SyncError_Result,SyncError_FormattedResult>;
  userentityinstancedata_fieldpermission: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  fieldpermissions: WebMappingRetrieve<FieldPermission_Select,FieldPermission_Expand,FieldPermission_Filter,FieldPermission_Fixed,FieldPermission_Result,FieldPermission_FormattedResult>;
}
interface WebEntitiesRelated {
  fieldpermissions: WebMappingRelated<FieldPermission_RelatedOne,FieldPermission_RelatedMany>;
}
interface WebEntitiesCUDA {
  fieldpermissions: WebMappingCUDA<FieldPermission_Create,FieldPermission_Update,FieldPermission_Select>;
}
