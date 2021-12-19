interface AppModuleMetadataOperationLog_Base extends WebEntity {
  appmoduleid?: string | null;
  appmodulemetadataoperationlogid?: string | null;
  createdon?: Date | null;
  modifiedon?: Date | null;
  retrycount?: number | null;
  startedon?: Date | null;
  state?: number | null;
}
interface AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog extends AppModuleMetadataOperationLog_Base, AppModuleMetadataOperationLog_Relationships {
}
interface AppModuleMetadataOperationLog_Create extends AppModuleMetadataOperationLog {
}
interface AppModuleMetadataOperationLog_Update extends AppModuleMetadataOperationLog {
}
interface AppModuleMetadataOperationLog_Select {
  appmoduleid: WebAttribute<AppModuleMetadataOperationLog_Select, { appmoduleid: string | null }, {  }>;
  appmodulemetadataoperationlogid: WebAttribute<AppModuleMetadataOperationLog_Select, { appmodulemetadataoperationlogid: string | null }, {  }>;
  createdon: WebAttribute<AppModuleMetadataOperationLog_Select, { createdon: Date | null }, { createdon_formatted?: string }>;
  modifiedon: WebAttribute<AppModuleMetadataOperationLog_Select, { modifiedon: Date | null }, { modifiedon_formatted?: string }>;
  retrycount: WebAttribute<AppModuleMetadataOperationLog_Select, { retrycount: number | null }, {  }>;
  startedon: WebAttribute<AppModuleMetadataOperationLog_Select, { startedon: Date | null }, { startedon_formatted?: string }>;
  state: WebAttribute<AppModuleMetadataOperationLog_Select, { state: number | null }, {  }>;
}
interface AppModuleMetadataOperationLog_Filter {
  appmoduleid: XQW.Guid;
  appmodulemetadataoperationlogid: XQW.Guid;
  createdon: Date;
  modifiedon: Date;
  retrycount: number;
  startedon: Date;
  state: number;
}
interface AppModuleMetadataOperationLog_Expand {
}
interface AppModuleMetadataOperationLog_FormattedResult {
  createdon_formatted?: string;
  modifiedon_formatted?: string;
  startedon_formatted?: string;
}
interface AppModuleMetadataOperationLog_Result extends AppModuleMetadataOperationLog_Base, AppModuleMetadataOperationLog_Relationships {
  "@odata.etag": string;
}
interface AppModuleMetadataOperationLog_RelatedOne {
}
interface AppModuleMetadataOperationLog_RelatedMany {
}
interface WebEntitiesRetrieve {
  appmodulemetadataoperationlogcollection: WebMappingRetrieve<AppModuleMetadataOperationLog_Select,AppModuleMetadataOperationLog_Expand,AppModuleMetadataOperationLog_Filter,AppModuleMetadataOperationLog_Fixed,AppModuleMetadataOperationLog_Result,AppModuleMetadataOperationLog_FormattedResult>;
}
interface WebEntitiesRelated {
  appmodulemetadataoperationlogcollection: WebMappingRelated<AppModuleMetadataOperationLog_RelatedOne,AppModuleMetadataOperationLog_RelatedMany>;
}
interface WebEntitiesCUDA {
  appmodulemetadataoperationlogcollection: WebMappingCUDA<AppModuleMetadataOperationLog_Create,AppModuleMetadataOperationLog_Update,AppModuleMetadataOperationLog_Select>;
}
