interface EntityDataSource_Base extends WebEntity {
  componentstate?: componentstate | null;
  connectiondefinition?: string | null;
  connectiondefinitionsecrets?: string | null;
  description?: string | null;
  entitydatasourceid?: string | null;
  entitydatasourceidunique?: string | null;
  entityname?: string | null;
  introducedversion?: string | null;
  iscustomizable?: any | null;
  ismanaged?: boolean | null;
  name?: string | null;
  organizationid?: string | null;
  overwritetime?: Date | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
}
interface EntityDataSource_Relationships {
}
interface EntityDataSource extends EntityDataSource_Base, EntityDataSource_Relationships {
  entitydataproviderid_bind$entitydataproviders?: string | null;
}
interface EntityDataSource_Create extends EntityDataSource {
}
interface EntityDataSource_Update extends EntityDataSource {
}
interface EntityDataSource_Select {
  componentstate: WebAttribute<EntityDataSource_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  connectiondefinition: WebAttribute<EntityDataSource_Select, { connectiondefinition: string | null }, {  }>;
  connectiondefinitionsecrets: WebAttribute<EntityDataSource_Select, { connectiondefinitionsecrets: string | null }, {  }>;
  description: WebAttribute<EntityDataSource_Select, { description: string | null }, {  }>;
  entitydataproviderid_guid: WebAttribute<EntityDataSource_Select, { entitydataproviderid_guid: string | null }, { entitydataproviderid_formatted?: string }>;
  entitydatasourceid: WebAttribute<EntityDataSource_Select, { entitydatasourceid: string | null }, {  }>;
  entitydatasourceidunique: WebAttribute<EntityDataSource_Select, { entitydatasourceidunique: string | null }, {  }>;
  entityname: WebAttribute<EntityDataSource_Select, { entityname: string | null }, {  }>;
  introducedversion: WebAttribute<EntityDataSource_Select, { introducedversion: string | null }, {  }>;
  iscustomizable: WebAttribute<EntityDataSource_Select, { iscustomizable: any | null }, {  }>;
  ismanaged: WebAttribute<EntityDataSource_Select, { ismanaged: boolean | null }, {  }>;
  name: WebAttribute<EntityDataSource_Select, { name: string | null }, {  }>;
  organizationid: WebAttribute<EntityDataSource_Select, { organizationid: string | null }, {  }>;
  overwritetime: WebAttribute<EntityDataSource_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  solutionid: WebAttribute<EntityDataSource_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<EntityDataSource_Select, { supportingsolutionid: string | null }, {  }>;
}
interface EntityDataSource_Filter {
  componentstate: componentstate;
  connectiondefinition: string;
  connectiondefinitionsecrets: string;
  description: string;
  entitydataproviderid_guid: XQW.Guid;
  entitydatasourceid: XQW.Guid;
  entitydatasourceidunique: XQW.Guid;
  entityname: string;
  introducedversion: string;
  iscustomizable: any;
  ismanaged: boolean;
  name: string;
  organizationid: XQW.Guid;
  overwritetime: Date;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
}
interface EntityDataSource_Expand {
  entitydataproviderid: WebExpand<EntityDataSource_Expand, EntityDataProvider_Select, EntityDataProvider_Filter, { entitydataproviderid: EntityDataProvider_Result }>;
  organizationid: WebExpand<EntityDataSource_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface EntityDataSource_FormattedResult {
  componentstate_formatted?: string;
  entitydataproviderid_formatted?: string;
  overwritetime_formatted?: string;
}
interface EntityDataSource_Result extends EntityDataSource_Base, EntityDataSource_Relationships {
  "@odata.etag": string;
  entitydataproviderid_guid: string | null;
}
interface EntityDataSource_RelatedOne {
  entitydataproviderid: WebMappingRetrieve<EntityDataProvider_Select,EntityDataProvider_Expand,EntityDataProvider_Filter,EntityDataProvider_Fixed,EntityDataProvider_Result,EntityDataProvider_FormattedResult>;
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface EntityDataSource_RelatedMany {
}
interface WebEntitiesRetrieve {
  entitydatasources: WebMappingRetrieve<EntityDataSource_Select,EntityDataSource_Expand,EntityDataSource_Filter,EntityDataSource_Fixed,EntityDataSource_Result,EntityDataSource_FormattedResult>;
}
interface WebEntitiesRelated {
  entitydatasources: WebMappingRelated<EntityDataSource_RelatedOne,EntityDataSource_RelatedMany>;
}
interface WebEntitiesCUDA {
  entitydatasources: WebMappingCUDA<EntityDataSource_Create,EntityDataSource_Update,EntityDataSource_Select>;
}
