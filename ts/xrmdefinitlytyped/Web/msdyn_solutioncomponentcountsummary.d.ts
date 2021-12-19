interface msdyn_solutioncomponentcountsummary_Base extends WebEntity {
  msdyn_componentlogicalname?: string | null;
  msdyn_componenttype?: number | null;
  msdyn_name?: string | null;
  msdyn_solutioncomponentcountsummaryid?: string | null;
  msdyn_solutionid?: string | null;
  msdyn_subtype?: string | null;
  msdyn_total?: number | null;
  msdyn_workflowcategory?: string | null;
}
interface msdyn_solutioncomponentcountsummary_Relationships {
}
interface msdyn_solutioncomponentcountsummary extends msdyn_solutioncomponentcountsummary_Base, msdyn_solutioncomponentcountsummary_Relationships {
}
interface msdyn_solutioncomponentcountsummary_Create extends msdyn_solutioncomponentcountsummary {
}
interface msdyn_solutioncomponentcountsummary_Update extends msdyn_solutioncomponentcountsummary {
}
interface msdyn_solutioncomponentcountsummary_Select {
  msdyn_componentlogicalname: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_componentlogicalname: string | null }, {  }>;
  msdyn_componenttype: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_componenttype: number | null }, {  }>;
  msdyn_name: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_name: string | null }, {  }>;
  msdyn_solutioncomponentcountsummaryid: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_solutioncomponentcountsummaryid: string | null }, {  }>;
  msdyn_solutionid: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_solutionid: string | null }, {  }>;
  msdyn_subtype: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_subtype: string | null }, {  }>;
  msdyn_total: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_total: number | null }, {  }>;
  msdyn_workflowcategory: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { msdyn_workflowcategory: string | null }, {  }>;
  organizationid_guid: WebAttribute<msdyn_solutioncomponentcountsummary_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
}
interface msdyn_solutioncomponentcountsummary_Filter {
  msdyn_componentlogicalname: string;
  msdyn_componenttype: any;
  msdyn_name: string;
  msdyn_solutioncomponentcountsummaryid: XQW.Guid;
  msdyn_solutionid: string;
  msdyn_subtype: string;
  msdyn_total: any;
  msdyn_workflowcategory: string;
  organizationid_guid: XQW.Guid;
}
interface msdyn_solutioncomponentcountsummary_Expand {
}
interface msdyn_solutioncomponentcountsummary_FormattedResult {
  organizationid_formatted?: string;
}
interface msdyn_solutioncomponentcountsummary_Result extends msdyn_solutioncomponentcountsummary_Base, msdyn_solutioncomponentcountsummary_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface msdyn_solutioncomponentcountsummary_RelatedOne {
}
interface msdyn_solutioncomponentcountsummary_RelatedMany {
}
interface WebEntitiesRetrieve {
  msdyn_solutioncomponentcountsummaries: WebMappingRetrieve<msdyn_solutioncomponentcountsummary_Select,msdyn_solutioncomponentcountsummary_Expand,msdyn_solutioncomponentcountsummary_Filter,msdyn_solutioncomponentcountsummary_Fixed,msdyn_solutioncomponentcountsummary_Result,msdyn_solutioncomponentcountsummary_FormattedResult>;
}
interface WebEntitiesRelated {
  msdyn_solutioncomponentcountsummaries: WebMappingRelated<msdyn_solutioncomponentcountsummary_RelatedOne,msdyn_solutioncomponentcountsummary_RelatedMany>;
}
interface WebEntitiesCUDA {
  msdyn_solutioncomponentcountsummaries: WebMappingCUDA<msdyn_solutioncomponentcountsummary_Create,msdyn_solutioncomponentcountsummary_Update,msdyn_solutioncomponentcountsummary_Select>;
}
