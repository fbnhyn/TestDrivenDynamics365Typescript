interface msdyn_appconfig_msdyn_channelprovider_Base extends WebEntity {
  componentidunique?: string | null;
  componentstate?: componentstate | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  msdyn_appconfig_msdyn_channelproviderid?: string | null;
  msdyn_appconfigurationid?: string | null;
  msdyn_channelproviderid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface msdyn_appconfig_msdyn_channelprovider_Relationships {
  msdyn_appconfig_msdyn_channelprovider?: msdyn_channelprovider_Result[] | null;
}
interface msdyn_appconfig_msdyn_channelprovider extends msdyn_appconfig_msdyn_channelprovider_Base, msdyn_appconfig_msdyn_channelprovider_Relationships {
}
interface msdyn_appconfig_msdyn_channelprovider_Create extends msdyn_appconfig_msdyn_channelprovider {
}
interface msdyn_appconfig_msdyn_channelprovider_Update extends msdyn_appconfig_msdyn_channelprovider {
}
interface msdyn_appconfig_msdyn_channelprovider_Select {
  componentidunique: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { componentidunique: string | null }, {  }>;
  componentstate: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  iscustomizable: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { ismanaged: boolean | null }, {  }>;
  msdyn_appconfig_msdyn_channelproviderid: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { msdyn_appconfig_msdyn_channelproviderid: string | null }, {  }>;
  msdyn_appconfigurationid: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { msdyn_appconfigurationid: string | null }, {  }>;
  msdyn_channelproviderid: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { msdyn_channelproviderid: string | null }, {  }>;
  overwritetime: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<msdyn_appconfig_msdyn_channelprovider_Select, { versionnumber: number | null }, {  }>;
}
interface msdyn_appconfig_msdyn_channelprovider_Filter {
  componentidunique: XQW.Guid;
  componentstate: componentstate;
  iscustomizable: any;
  ismanaged: boolean;
  msdyn_appconfig_msdyn_channelproviderid: XQW.Guid;
  msdyn_appconfigurationid: XQW.Guid;
  msdyn_channelproviderid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface msdyn_appconfig_msdyn_channelprovider_Expand {
  msdyn_appconfig_msdyn_channelprovider: WebExpand<msdyn_appconfig_msdyn_channelprovider_Expand, msdyn_channelprovider_Select, msdyn_channelprovider_Filter, { msdyn_appconfig_msdyn_channelprovider: msdyn_channelprovider_Result[] }>;
}
interface msdyn_appconfig_msdyn_channelprovider_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface msdyn_appconfig_msdyn_channelprovider_Result extends msdyn_appconfig_msdyn_channelprovider_Base, msdyn_appconfig_msdyn_channelprovider_Relationships {
  "@odata.etag": string;
}
interface msdyn_appconfig_msdyn_channelprovider_RelatedOne {
}
interface msdyn_appconfig_msdyn_channelprovider_RelatedMany {
  msdyn_appconfig_msdyn_channelprovider: WebMappingRetrieve<msdyn_channelprovider_Select,msdyn_channelprovider_Expand,msdyn_channelprovider_Filter,msdyn_channelprovider_Fixed,msdyn_channelprovider_Result,msdyn_channelprovider_FormattedResult>;
}
interface WebEntitiesRetrieve {
  msdyn_appconfig_msdyn_channelproviderset: WebMappingRetrieve<msdyn_appconfig_msdyn_channelprovider_Select,msdyn_appconfig_msdyn_channelprovider_Expand,msdyn_appconfig_msdyn_channelprovider_Filter,msdyn_appconfig_msdyn_channelprovider_Fixed,msdyn_appconfig_msdyn_channelprovider_Result,msdyn_appconfig_msdyn_channelprovider_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_appconfig_msdyn_channelproviderset: WebMappingRelated<msdyn_appconfig_msdyn_channelprovider_RelatedOne,msdyn_appconfig_msdyn_channelprovider_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_appconfig_msdyn_channelproviderset: WebMappingCUDA<msdyn_appconfig_msdyn_channelprovider_Create,msdyn_appconfig_msdyn_channelprovider_Update,msdyn_appconfig_msdyn_channelprovider_Select>;
}
