interface msdyn_solutioncomponentcountdatasource_Base extends WebEntity {
  msdyn_name?: string | null;
  msdyn_solutioncomponentcountdatasourceid?: string | null;
  organizationid?: string | null;
}
interface msdyn_solutioncomponentcountdatasource_Relationships {
}
interface msdyn_solutioncomponentcountdatasource extends msdyn_solutioncomponentcountdatasource_Base, msdyn_solutioncomponentcountdatasource_Relationships {
}
interface msdyn_solutioncomponentcountdatasource_Create extends msdyn_solutioncomponentcountdatasource {
}
interface msdyn_solutioncomponentcountdatasource_Update extends msdyn_solutioncomponentcountdatasource {
}
interface msdyn_solutioncomponentcountdatasource_Select {
  msdyn_name: WebAttribute<msdyn_solutioncomponentcountdatasource_Select, { msdyn_name: string | null }, {  }>;
  msdyn_solutioncomponentcountdatasourceid: WebAttribute<msdyn_solutioncomponentcountdatasource_Select, { msdyn_solutioncomponentcountdatasourceid: string | null }, {  }>;
  organizationid: WebAttribute<msdyn_solutioncomponentcountdatasource_Select, { organizationid: string | null }, {  }>;
}
interface msdyn_solutioncomponentcountdatasource_Filter {
  msdyn_name: string;
  msdyn_solutioncomponentcountdatasourceid: XQW.Guid;
  organizationid: XQW.Guid;
}
interface msdyn_solutioncomponentcountdatasource_Expand {
}
interface msdyn_solutioncomponentcountdatasource_FormattedResult {
}
interface msdyn_solutioncomponentcountdatasource_Result extends msdyn_solutioncomponentcountdatasource_Base, msdyn_solutioncomponentcountdatasource_Relationships {
  "@odata.etag": string;
}
interface msdyn_solutioncomponentcountdatasource_RelatedOne {
}
interface msdyn_solutioncomponentcountdatasource_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_solutioncomponentcountdatasources: WebMappingRetrieve<msdyn_solutioncomponentcountdatasource_Select,msdyn_solutioncomponentcountdatasource_Expand,msdyn_solutioncomponentcountdatasource_Filter,msdyn_solutioncomponentcountdatasource_Fixed,msdyn_solutioncomponentcountdatasource_Result,msdyn_solutioncomponentcountdatasource_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutioncomponentcountdatasources: WebMappingRelated<msdyn_solutioncomponentcountdatasource_RelatedOne,msdyn_solutioncomponentcountdatasource_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutioncomponentcountdatasources: WebMappingCUDA<msdyn_solutioncomponentcountdatasource_Create,msdyn_solutioncomponentcountdatasource_Update,msdyn_solutioncomponentcountdatasource_Select>;
}
