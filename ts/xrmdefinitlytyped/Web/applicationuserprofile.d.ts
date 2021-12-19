interface applicationuserprofile_Base extends WebEntity {
  applicationuserid?: string | null;
  applicationuserprofileid?: string | null;
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  fieldsecurityprofileid?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface applicationuserprofile_Relationships {
  applicationuserprofile?: FieldSecurityProfile_Result[] | null;
}
interface applicationuserprofile extends applicationuserprofile_Base, applicationuserprofile_Relationships {
}
interface applicationuserprofile_Create extends applicationuserprofile {
}
interface applicationuserprofile_Update extends applicationuserprofile {
}
interface applicationuserprofile_Select {
  applicationuserid: WebAttribute<applicationuserprofile_Select, { applicationuserid: string | null }, {  }>;
  applicationuserprofileid: WebAttribute<applicationuserprofile_Select, { applicationuserprofileid: string | null }, {  }>;
  componentidunique: WebAttribute<applicationuserprofile_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<applicationuserprofile_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  fieldsecurityprofileid: WebAttribute<applicationuserprofile_Select, { fieldsecurityprofileid: string | null }, {  }>;
  iscustomizable: WebAttribute<applicationuserprofile_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<applicationuserprofile_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<applicationuserprofile_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<applicationuserprofile_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<applicationuserprofile_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<applicationuserprofile_Select, { versionnumber: number | null }, {  }>;
}
interface applicationuserprofile_Filter {
  applicationuserid: XQW.Guid;
  applicationuserprofileid: XQW.Guid;
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  fieldsecurityprofileid: XQW.Guid;
  iscustomizable: any;
  ismanaged: boolean;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface applicationuserprofile_Expand {
  applicationuserprofile: WebExpand<applicationuserprofile_Expand, FieldSecurityProfile_Select, FieldSecurityProfile_Filter, { applicationuserprofile: FieldSecurityProfile_Result[] }>;
}
interface applicationuserprofile_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface applicationuserprofile_Result extends applicationuserprofile_Base, applicationuserprofile_Relationships {
  "@odata.etag": string;
}
interface applicationuserprofile_RelatedOne {
}
interface applicationuserprofile_RelatedMany {
  applicationuserprofile: WebMappingRetrieve<FieldSecurityProfile_Select,FieldSecurityProfile_Expand,FieldSecurityProfile_Filter,FieldSecurityProfile_Fixed,FieldSecurityProfile_Result,FieldSecurityProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  applicationuserprofileset: WebMappingRetrieve<applicationuserprofile_Select,applicationuserprofile_Expand,applicationuserprofile_Filter,applicationuserprofile_Fixed,applicationuserprofile_Result,applicationuserprofile_FormattedResult>;
}
interface WebEntitiesRelated {
  applicationuserprofileset: WebMappingRelated<applicationuserprofile_RelatedOne,applicationuserprofile_RelatedMany>;
}
interface WebEntitiesCUDA {
  applicationuserprofileset: WebMappingCUDA<applicationuserprofile_Create,applicationuserprofile_Update,applicationuserprofile_Select>;
}
