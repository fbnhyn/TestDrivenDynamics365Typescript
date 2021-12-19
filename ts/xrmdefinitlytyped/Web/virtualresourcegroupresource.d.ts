interface virtualresourcegroupresource_Base extends WebEntity {
  businessunit?: string | null;
  constraintbasedgroupid?: string | null;
  name?: string | null;
  resourceentitylogicalname?: string | null;
  resourceentityname?: string | null;
  virtualresourcegroupresourceid?: string | null;
}
interface virtualresourcegroupresource_Relationships {
  resourcegroupId?: ConstraintBasedGroup_Result | null;
}
interface virtualresourcegroupresource extends virtualresourcegroupresource_Base, virtualresourcegroupresource_Relationships {
  resourcegroupId_bind$constraintbasedgroups?: string | null;
}
interface virtualresourcegroupresource_Create extends virtualresourcegroupresource {
}
interface virtualresourcegroupresource_Update extends virtualresourcegroupresource {
}
interface virtualresourcegroupresource_Select {
  businessunit: WebAttribute<virtualresourcegroupresource_Select, { businessunit: string | null }, {  }>;
  constraintbasedgroupid: WebAttribute<virtualresourcegroupresource_Select, { constraintbasedgroupid: string | null }, {  }>;
  name: WebAttribute<virtualresourcegroupresource_Select, { name: string | null }, {  }>;
  resourceentitylogicalname: WebAttribute<virtualresourcegroupresource_Select, { resourceentitylogicalname: string | null }, {  }>;
  resourceentityname: WebAttribute<virtualresourcegroupresource_Select, { resourceentityname: string | null }, {  }>;
  resourcegroupid_guid: WebAttribute<virtualresourcegroupresource_Select, { resourcegroupid_guid: string | null }, { resourcegroupid_formatted?: string }>;
  virtualresourcegroupresourceid: WebAttribute<virtualresourcegroupresource_Select, { virtualresourcegroupresourceid: string | null }, {  }>;
}
interface virtualresourcegroupresource_Filter {
  businessunit: string;
  constraintbasedgroupid: string;
  name: string;
  resourceentitylogicalname: string;
  resourceentityname: string;
  resourcegroupid_guid: XQW.Guid;
  virtualresourcegroupresourceid: XQW.Guid;
}
interface virtualresourcegroupresource_Expand {
  resourcegroupId: WebExpand<virtualresourcegroupresource_Expand, ConstraintBasedGroup_Select, ConstraintBasedGroup_Filter, { resourcegroupId: ConstraintBasedGroup_Result }>;
}
interface virtualresourcegroupresource_FormattedResult {
  resourcegroupid_formatted?: string;
}
interface virtualresourcegroupresource_Result extends virtualresourcegroupresource_Base, virtualresourcegroupresource_Relationships {
  "@odata.etag": string;
  resourcegroupid_guid: string | null;
}
interface virtualresourcegroupresource_RelatedOne {
  resourcegroupId: WebMappingRetrieve<ConstraintBasedGroup_Select,ConstraintBasedGroup_Expand,ConstraintBasedGroup_Filter,ConstraintBasedGroup_Fixed,ConstraintBasedGroup_Result,ConstraintBasedGroup_FormattedResult>;
}
interface virtualresourcegroupresource_RelatedMany {
}
interface WebEntitiesRetrieve {
  virtualresourcegroupresources: WebMappingRetrieve<virtualresourcegroupresource_Select,virtualresourcegroupresource_Expand,virtualresourcegroupresource_Filter,virtualresourcegroupresource_Fixed,virtualresourcegroupresource_Result,virtualresourcegroupresource_FormattedResult>;
}
interface WebEntitiesRelated {
  virtualresourcegroupresources: WebMappingRelated<virtualresourcegroupresource_RelatedOne,virtualresourcegroupresource_RelatedMany>;
}
interface WebEntitiesCUDA {
  virtualresourcegroupresources: WebMappingCUDA<virtualresourcegroupresource_Create,virtualresourcegroupresource_Update,virtualresourcegroupresource_Select>;
}
