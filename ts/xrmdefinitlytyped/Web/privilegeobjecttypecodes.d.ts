interface PrivilegeObjectTypeCodes_Base extends WebEntity {
  componentstate?: componentstate | null;
  introducedversion?: string | null;
  ismanaged?: boolean | null;
  objecttypecode?: string | null;
  overwritetime?: Date | null;
  privilegeobjecttypecodeid?: string | null;
  privilegeobjecttypecoderowid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface PrivilegeObjectTypeCodes_Relationships {
}
interface PrivilegeObjectTypeCodes extends PrivilegeObjectTypeCodes_Base, PrivilegeObjectTypeCodes_Relationships {
  privilegeid_bind$privileges?: string | null;
}
interface PrivilegeObjectTypeCodes_Create extends PrivilegeObjectTypeCodes {
}
interface PrivilegeObjectTypeCodes_Update extends PrivilegeObjectTypeCodes {
}
interface PrivilegeObjectTypeCodes_Select {
  componentstate: WebAttribute<PrivilegeObjectTypeCodes_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  introducedversion: WebAttribute<PrivilegeObjectTypeCodes_Select, { introducedversion: string | null }, {  }>;
  ismanaged: WebAttribute<PrivilegeObjectTypeCodes_Select, { ismanaged: boolean | null }, {  }>;
  objecttypecode: WebAttribute<PrivilegeObjectTypeCodes_Select, { objecttypecode: string | null }, {  }>;
  overwritetime: WebAttribute<PrivilegeObjectTypeCodes_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  privilegeid_guid: WebAttribute<PrivilegeObjectTypeCodes_Select, { privilegeid_guid: string | null }, { privilegeid_formatted?: string }>;
  privilegeobjecttypecodeid: WebAttribute<PrivilegeObjectTypeCodes_Select, { privilegeobjecttypecodeid: string | null }, {  }>;
  privilegeobjecttypecoderowid: WebAttribute<PrivilegeObjectTypeCodes_Select, { privilegeobjecttypecoderowid: string | null }, {  }>;
  solutionid: WebAttribute<PrivilegeObjectTypeCodes_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<PrivilegeObjectTypeCodes_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<PrivilegeObjectTypeCodes_Select, { versionnumber: number | null }, {  }>;
}
interface PrivilegeObjectTypeCodes_Filter {
  componentstate: componentstate;
  introducedversion: string;
  ismanaged: boolean;
  objecttypecode: string;
  overwritetime: Date;
  privilegeid_guid: XQW.Guid;
  privilegeobjecttypecodeid: XQW.Guid;
  privilegeobjecttypecoderowid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface PrivilegeObjectTypeCodes_Expand {
  privilegeid: WebExpand<PrivilegeObjectTypeCodes_Expand, Privilege_Select, Privilege_Filter, { privilegeid: Privilege_Result }>;
}
interface PrivilegeObjectTypeCodes_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
  privilegeid_formatted?: string;
}
interface PrivilegeObjectTypeCodes_Result extends PrivilegeObjectTypeCodes_Base, PrivilegeObjectTypeCodes_Relationships {
  "@odata.etag": string;
  privilegeid_guid: string | null;
}
interface PrivilegeObjectTypeCodes_RelatedOne {
  privilegeid: WebMappingRetrieve<Privilege_Select,Privilege_Expand,Privilege_Filter,Privilege_Fixed,Privilege_Result,Privilege_FormattedResult>;
}
interface PrivilegeObjectTypeCodes_RelatedMany {
}
interface WebEntitiesRetrieve {
  privilegeobjecttypecodesset: WebMappingRetrieve<PrivilegeObjectTypeCodes_Select,PrivilegeObjectTypeCodes_Expand,PrivilegeObjectTypeCodes_Filter,PrivilegeObjectTypeCodes_Fixed,PrivilegeObjectTypeCodes_Result,PrivilegeObjectTypeCodes_FormattedResult>;
}
interface WebEntitiesRelated {
  privilegeobjecttypecodesset: WebMappingRelated<PrivilegeObjectTypeCodes_RelatedOne,PrivilegeObjectTypeCodes_RelatedMany>;
}
interface WebEntitiesCUDA {
  privilegeobjecttypecodesset: WebMappingCUDA<PrivilegeObjectTypeCodes_Create,PrivilegeObjectTypeCodes_Update,PrivilegeObjectTypeCodes_Select>;
}
