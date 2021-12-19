interface applicationuserrole_Base extends WebEntity {
  applicationuserid?: string | null;
  applicationuserroleid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  roleid?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface applicationuserrole_Relationships {
  applicationuserrole?: Role_Result[] | null;
}
interface applicationuserrole extends applicationuserrole_Base, applicationuserrole_Relationships {
}
interface applicationuserrole_Create extends applicationuserrole {
}
interface applicationuserrole_Update extends applicationuserrole {
}
interface applicationuserrole_Select {
  applicationuserid: WebAttribute<applicationuserrole_Select, { applicationuserid: string | null }, {  }>;
  applicationuserroleid: WebAttribute<applicationuserrole_Select, { applicationuserroleid: string | null }, {  }>;
  componentidunique: WebAttribute<applicationuserrole_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<applicationuserrole_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<applicationuserrole_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<applicationuserrole_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<applicationuserrole_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  roleid: WebAttribute<applicationuserrole_Select, { roleid: string | null }, {  }>;
  solutionid: WebAttribute<applicationuserrole_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<applicationuserrole_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<applicationuserrole_Select, { versionnumber: number | null }, {  }>;
}
interface applicationuserrole_Filter {
  applicationuserid: XQW.Guid;
  applicationuserroleid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  overwritetime: Date;
  roleid: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface applicationuserrole_Expand {
  applicationuserrole: WebExpand<applicationuserrole_Expand, Role_Select, Role_Filter, { applicationuserrole: Role_Result[] }>;
}
interface applicationuserrole_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface applicationuserrole_Result extends applicationuserrole_Base, applicationuserrole_Relationships {
  "@odata.etag": string;
}
interface applicationuserrole_RelatedOne {
}
interface applicationuserrole_RelatedMany {
  applicationuserrole: WebMappingRetrieve<Role_Select,Role_Expand,Role_Filter,Role_Fixed,Role_Result,Role_FormattedResult>;
}
interface WebEntitiesRetrieve {
  applicationuserroleset: WebMappingRetrieve<applicationuserrole_Select,applicationuserrole_Expand,applicationuserrole_Filter,applicationuserrole_Fixed,applicationuserrole_Result,applicationuserrole_FormattedResult>;
}
interface WebEntitiesRelated {
  applicationuserroleset: WebMappingRelated<applicationuserrole_RelatedOne,applicationuserrole_RelatedMany>;
}
interface WebEntitiesCUDA {
  applicationuserroleset: WebMappingCUDA<applicationuserrole_Create,applicationuserrole_Update,applicationuserrole_Select>;
}
