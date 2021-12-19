interface msdyn_notificationtemplate_notificationfield_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_notificationfieldid?: string | null;
  msdyn_notificationtemplate_notificationfieldid?: string | null;
  msdyn_notificationtemplateid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_notificationtemplate_notificationfield_Relationships {
  msdyn_notificationtemplate_notificationfield?: msdyn_notificationfield_Result[] | null;
}
interface msdyn_notificationtemplate_notificationfield extends msdyn_notificationtemplate_notificationfield_Base, msdyn_notificationtemplate_notificationfield_Relationships {
}
interface msdyn_notificationtemplate_notificationfield_Create extends msdyn_notificationtemplate_notificationfield {
}
interface msdyn_notificationtemplate_notificationfield_Update extends msdyn_notificationtemplate_notificationfield {
}
interface msdyn_notificationtemplate_notificationfield_Select {
  componentidunique: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_notificationfieldid: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { msdyn_notificationfieldid: string | null }, {  }>;
  msdyn_notificationtemplate_notificationfieldid: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { msdyn_notificationtemplate_notificationfieldid: string | null }, {  }>;
  msdyn_notificationtemplateid: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { msdyn_notificationtemplateid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_notificationtemplate_notificationfield_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_notificationtemplate_notificationfield_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_notificationfieldid: XQW.Guid;
  msdyn_notificationtemplate_notificationfieldid: XQW.Guid;
  msdyn_notificationtemplateid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_notificationtemplate_notificationfield_Expand {
  msdyn_notificationtemplate_notificationfield: WebExpand<msdyn_notificationtemplate_notificationfield_Expand, msdyn_notificationfield_Select, msdyn_notificationfield_Filter, { msdyn_notificationtemplate_notificationfield: msdyn_notificationfield_Result[] }>;
}
interface msdyn_notificationtemplate_notificationfield_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_notificationtemplate_notificationfield_Result extends msdyn_notificationtemplate_notificationfield_Base, msdyn_notificationtemplate_notificationfield_Relationships {
  "@odata.etag": string;
}
interface msdyn_notificationtemplate_notificationfield_RelatedOne {
}
interface msdyn_notificationtemplate_notificationfield_RelatedMany {
  msdyn_notificationtemplate_notificationfield: WebMappingRetrieve<msdyn_notificationfield_Select,msdyn_notificationfield_Expand,msdyn_notificationfield_Filter,msdyn_notificationfield_Fixed,msdyn_notificationfield_Result,msdyn_notificationfield_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_notificationtemplate_notificationfieldset: WebMappingRetrieve<msdyn_notificationtemplate_notificationfield_Select,msdyn_notificationtemplate_notificationfield_Expand,msdyn_notificationtemplate_notificationfield_Filter,msdyn_notificationtemplate_notificationfield_Fixed,msdyn_notificationtemplate_notificationfield_Result,msdyn_notificationtemplate_notificationfield_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_notificationtemplate_notificationfieldset: WebMappingRelated<msdyn_notificationtemplate_notificationfield_RelatedOne,msdyn_notificationtemplate_notificationfield_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_notificationtemplate_notificationfieldset: WebMappingCUDA<msdyn_notificationtemplate_notificationfield_Create,msdyn_notificationtemplate_notificationfield_Update,msdyn_notificationtemplate_notificationfield_Select>;
}
