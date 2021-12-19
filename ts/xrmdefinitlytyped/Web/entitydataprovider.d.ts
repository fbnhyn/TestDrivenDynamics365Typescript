interface EntityDataProvider_Base extends WebEntity {
  componentstate?: componentstate | null;
  createmultipleplugin?: string | null;
  createplugin?: string | null;
  datasourcelogicalname?: string | null;
  deletemultipleplugin?: string | null;
  deleteplugin?: string | null;
  description?: string | null;
  entitydataproviderid?: string | null;
  entitydataprovideridunique?: string | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  name?: string | null;
  organizationid?: string | null;
  overwritetime?: Date | null;
  retrieveentitychangesplugin?: string | null;
  retrievemultipleplugin?: string | null;
  retrieveplugin?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
  updatemultipleplugin?: string | null;
  updateplugin?: string | null;
  upsertmultipleplugin?: string | null;
  upsertplugin?: string | null;
}
interface EntityDataProvider_Relationships {
  entitydataprovider_datasource?: EntityDataSource_Result[] | null;
}
interface EntityDataProvider extends EntityDataProvider_Base, EntityDataProvider_Relationships {
}
interface EntityDataProvider_Create extends EntityDataProvider {
}
interface EntityDataProvider_Update extends EntityDataProvider {
}
interface EntityDataProvider_Select {
  componentstate: WebAttribute<EntityDataProvider_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  createmultipleplugin: WebAttribute<EntityDataProvider_Select, { createmultipleplugin: string | null }, {  }>;
  createplugin: WebAttribute<EntityDataProvider_Select, { createplugin: string | null }, {  }>;
  datasourcelogicalname: WebAttribute<EntityDataProvider_Select, { datasourcelogicalname: string | null }, {  }>;
  deletemultipleplugin: WebAttribute<EntityDataProvider_Select, { deletemultipleplugin: string | null }, {  }>;
  deleteplugin: WebAttribute<EntityDataProvider_Select, { deleteplugin: string | null }, {  }>;
  description: WebAttribute<EntityDataProvider_Select, { description: string | null }, {  }>;
  entitydataproviderid: WebAttribute<EntityDataProvider_Select, { entitydataproviderid: string | null }, {  }>;
  entitydataprovideridunique: WebAttribute<EntityDataProvider_Select, { entitydataprovideridunique: string | null }, {  }>;
  introducedversion: WebAttribute<EntityDataProvider_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<EntityDataProvider_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<EntityDataProvider_Select, { ismanaged: boolean | null }, {  }>;
  name: WebAttribute<EntityDataProvider_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<EntityDataProvider_Select, { organizationid: string | null }, {  }>;
  overwritetime: WebAttribute<EntityDataProvider_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  retrieveentitychangesplugin: WebAttribute<EntityDataProvider_Select, { retrieveentitychangesplugin: string | null }, {  }>;
  retrievemultipleplugin: WebAttribute<EntityDataProvider_Select, { retrievemultipleplugin: string | null }, {  }>;
  retrieveplugin: WebAttribute<EntityDataProvider_Select, { retrieveplugin: string | null }, {  }>;
  solutionid: WebAttribute<EntityDataProvider_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<EntityDataProvider_Select, { supportingsolutionid: string | null }, {  }>;
  updatemultipleplugin: WebAttribute<EntityDataProvider_Select, { updatemultipleplugin: string | null }, {  }>;
  updateplugin: WebAttribute<EntityDataProvider_Select, { updateplugin: string | null }, {  }>;
  upsertmultipleplugin: WebAttribute<EntityDataProvider_Select, { upsertmultipleplugin: string | null }, {  }>;
  upsertplugin: WebAttribute<EntityDataProvider_Select, { upsertplugin: string | null }, {  }>;
}
interface EntityDataProvider_Filter {
  componentstate: componentstate;
  createmultipleplugin: XQW.Guid;
  createplugin: XQW.Guid;
  datasourcelogicalname: string;
  deletemultipleplugin: XQW.Guid;
  deleteplugin: XQW.Guid;
  description: string;
  entitydataproviderid: XQW.Guid;
  entitydataprovideridunique: XQW.Guid;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  name: string;
  organizationid: XQW.Guid;
  overwritetime: Date;
  retrieveentitychangesplugin: XQW.Guid;
  retrievemultipleplugin: XQW.Guid;
  retrieveplugin: XQW.Guid;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
  updatemultipleplugin: XQW.Guid;
  updateplugin: XQW.Guid;
  upsertmultipleplugin: XQW.Guid;
  upsertplugin: XQW.Guid;
}
interface EntityDataProvider_Expand {
  entitydataprovider_datasource: WebExpand<EntityDataProvider_Expand, EntityDataSource_Select, EntityDataSource_Filter, { entitydataprovider_datasource: EntityDataSource_Result[] }>;
  organizationid: WebExpand<EntityDataProvider_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface EntityDataProvider_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface EntityDataProvider_Result extends EntityDataProvider_Base, EntityDataProvider_Relationships {
  "@odata.etag": string;
}
interface EntityDataProvider_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface EntityDataProvider_RelatedMany {
  entitydataprovider_datasource: WebMappingRetrieve<EntityDataSource_Select,EntityDataSource_Expand,EntityDataSource_Filter,EntityDataSource_Fixed,EntityDataSource_Result,EntityDataSource_FormattedResult>;
}
interface WebEntitiesRetrieve {
  entitydataproviders: WebMappingRetrieve<EntityDataProvider_Select,EntityDataProvider_Expand,EntityDataProvider_Filter,EntityDataProvider_Fixed,EntityDataProvider_Result,EntityDataProvider_FormattedResult>;
}
interface WebEntitiesRelated {
  entitydataproviders: WebMappingRelated<EntityDataProvider_RelatedOne,EntityDataProvider_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitydataproviders: WebMappingCUDA<EntityDataProvider_Create,EntityDataProvider_Update,EntityDataProvider_Select>;
}
