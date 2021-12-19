interface msdyn_solutioncomponentdatasource_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_solutioncomponentdatasourceid?: string | null;
  organizationid?: string | null;
}
interface msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
}
interface msdyn_solutioncomponentdatasource_Create extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentdatasource_Update extends msdyn_solutioncomponentdatasource {
}
interface msdyn_solutioncomponentdatasource_Select {
  msdyn_name: WebAttribute<msdyn_solutioncomponentdatasource_Select, { msdyn_name: string | null }, {  }>;
  msdyn_solutioncomponentdatasourceid: WebAttribute<msdyn_solutioncomponentdatasource_Select, { msdyn_solutioncomponentdatasourceid: string | null }, {  }>;
  organizationid: WebAttribute<msdyn_solutioncomponentdatasource_Select, { organizationid: string | null }, {  }>;
}
interface msdyn_solutioncomponentdatasource_Filter {
  msdyn_name: string;
  msdyn_solutioncomponentdatasourceid: XQW.Guid;
  organizationid: XQW.Guid;
}
interface msdyn_solutioncomponentdatasource_Expand {
}
interface msdyn_solutioncomponentdatasource_FormattedResult {
}
interface msdyn_solutioncomponentdatasource_Result extends msdyn_solutioncomponentdatasource_Base, msdyn_solutioncomponentdatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_solutioncomponentdatasource_RelatedOne {
}
interface msdyn_solutioncomponentdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_solutioncomponentdatasources: WebMappingRetrieve<msdyn_solutioncomponentdatasource_Select,msdyn_solutioncomponentdatasource_Expand,msdyn_solutioncomponentdatasource_Filter,msdyn_solutioncomponentdatasource_Fixed,msdyn_solutioncomponentdatasource_Result,msdyn_solutioncomponentdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutioncomponentdatasources: WebMappingRelated<msdyn_solutioncomponentdatasource_RelatedOne,msdyn_solutioncomponentdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutioncomponentdatasources: WebMappingCUDA<msdyn_solutioncomponentdatasource_Create,msdyn_solutioncomponentdatasource_Update,msdyn_solutioncomponentdatasource_Select>;
}
