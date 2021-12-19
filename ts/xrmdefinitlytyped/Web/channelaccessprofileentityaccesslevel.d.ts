interface ChannelAccessProfileEntityAccessLevel_Base extends WebEntity {
  channelaccessprofileentityaccesslevelid?: string | null;
  channelaccessprofileentityaccesslevelidunique?: string | null;
  channelaccessprofileid?: string | null;
  componentstate?: componentstate | null;
  entityaccessleveldepthmask?: number | null;
  entityaccesslevelid?: string | null;
  ismanaged?: boolean | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  versionnumber?: number | null;
}
interface ChannelAccessProfileEntityAccessLevel_Relationships {
  ChannelAccessProfile_Privilege?: ChannelAccessProfile_Result[] | null;
}
interface ChannelAccessProfileEntityAccessLevel extends ChannelAccessProfileEntityAccessLevel_Base, ChannelAccessProfileEntityAccessLevel_Relationships {
}
interface ChannelAccessProfileEntityAccessLevel_Create extends ChannelAccessProfileEntityAccessLevel {
}
interface ChannelAccessProfileEntityAccessLevel_Update extends ChannelAccessProfileEntityAccessLevel {
}
interface ChannelAccessProfileEntityAccessLevel_Select {
  channelaccessprofileentityaccesslevelid: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { channelaccessprofileentityaccesslevelid: string | null }, {  }>;
  channelaccessprofileentityaccesslevelidunique: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { channelaccessprofileentityaccesslevelidunique: string | null }, {  }>;
  channelaccessprofileid: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { channelaccessprofileid: string | null }, {  }>;
  componentstate: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  entityaccessleveldepthmask: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { entityaccessleveldepthmask: number | null }, {  }>;
  entityaccesslevelid: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { entityaccesslevelid: string | null }, {  }>;
  ismanaged: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { ismanaged: boolean | null }, {  }>;
  overwritetime: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { supportingsolutionid: string | null }, {  }>;
  versionnumber: WebAttribute<ChannelAccessProfileEntityAccessLevel_Select, { versionnumber: number | null }, {  }>;
}
interface ChannelAccessProfileEntityAccessLevel_Filter {
  channelaccessprofileentityaccesslevelid: XQW.Guid;
  channelaccessprofileentityaccesslevelidunique: XQW.Guid;
  channelaccessprofileid: XQW.Guid;
  componentstate: componentstate;
  entityaccessleveldepthmask: number;
  entityaccesslevelid: XQW.Guid;
  ismanaged: boolean;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  versionnumber: number;
}
interface ChannelAccessProfileEntityAccessLevel_Expand {
  ChannelAccessProfile_Privilege: WebExpand<ChannelAccessProfileEntityAccessLevel_Expand, ChannelAccessProfile_Select, ChannelAccessProfile_Filter, { ChannelAccessProfile_Privilege: ChannelAccessProfile_Result[] }>;
}
interface ChannelAccessProfileEntityAccessLevel_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface ChannelAccessProfileEntityAccessLevel_Result extends ChannelAccessProfileEntityAccessLevel_Base, ChannelAccessProfileEntityAccessLevel_Relationships {
  "@odata.etag": string;
}
interface ChannelAccessProfileEntityAccessLevel_RelatedOne {
}
interface ChannelAccessProfileEntityAccessLevel_RelatedMany {
  ChannelAccessProfile_Privilege: WebMappingRetrieve<ChannelAccessProfile_Select,ChannelAccessProfile_Expand,ChannelAccessProfile_Filter,ChannelAccessProfile_Fixed,ChannelAccessProfile_Result,ChannelAccessProfile_FormattedResult>;
}
interface WebEntitiesRetrieve {
  channelaccessprofileentityaccesslevels: WebMappingRetrieve<ChannelAccessProfileEntityAccessLevel_Select,ChannelAccessProfileEntityAccessLevel_Expand,ChannelAccessProfileEntityAccessLevel_Filter,ChannelAccessProfileEntityAccessLevel_Fixed,ChannelAccessProfileEntityAccessLevel_Result,ChannelAccessProfileEntityAccessLevel_FormattedResult>;
}
interface WebEntitiesRelated {
  channelaccessprofileentityaccesslevels: WebMappingRelated<ChannelAccessProfileEntityAccessLevel_RelatedOne,ChannelAccessProfileEntityAccessLevel_RelatedMany>;
}
interface WebEntitiesCUDA {
  channelaccessprofileentityaccesslevels: WebMappingCUDA<ChannelAccessProfileEntityAccessLevel_Create,ChannelAccessProfileEntityAccessLevel_Update,ChannelAccessProfileEntityAccessLevel_Select>;
}
