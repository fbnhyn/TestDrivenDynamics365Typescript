interface DataPerformance_Base extends WebEntity {
  anyoptimizationapplied?: boolean | null;
  anyoptimizationavailable?: boolean | null;
  component?: string | null;
  count?: number | null;
  dataperformanceid?: string | null;
  entity?: string | null;
  estimatedoptimizationimpact?: number | null;
  executionperiod?: string | null;
  lastactionresult?: string | null;
  lastoptimizationdate?: Date | null;
  maxtime?: number | null;
  mediantime?: number | null;
  mintime?: number | null;
  operation?: string | null;
  optimizationstatus?: string | null;
  optimizationstorage?: number | null;
  realizedoptimizationimpact?: string | null;
  solution?: string | null;
  weight?: number | null;
}
interface DataPerformance_Relationships {
}
interface DataPerformance extends DataPerformance_Base, DataPerformance_Relationships {
}
interface DataPerformance_Create extends DataPerformance {
}
interface DataPerformance_Update extends DataPerformance {
}
interface DataPerformance_Select {
  anyoptimizationapplied: WebAttribute<DataPerformance_Select, { anyoptimizationapplied: boolean | null }, {  }>;
  anyoptimizationavailable: WebAttribute<DataPerformance_Select, { anyoptimizationavailable: boolean | null }, {  }>;
  component: WebAttribute<DataPerformance_Select, { component: string | null }, {  }>;
  count: WebAttribute<DataPerformance_Select, { count: number | null }, {  }>;
  dataperformanceid: WebAttribute<DataPerformance_Select, { dataperformanceid: string | null }, {  }>;
  entity: WebAttribute<DataPerformance_Select, { entity: string | null }, {  }>;
  estimatedoptimizationimpact: WebAttribute<DataPerformance_Select, { estimatedoptimizationimpact: number | null }, {  }>;
  executionperiod: WebAttribute<DataPerformance_Select, { executionperiod: string | null }, {  }>;
  lastactionresult: WebAttribute<DataPerformance_Select, { lastactionresult: string | null }, {  }>;
  lastoptimizationdate: WebAttribute<DataPerformance_Select, { lastoptimizationdate: Date | null }, { lastoptimizationdate_formatted?: string }>;
  maxtime: WebAttribute<DataPerformance_Select, { maxtime: number | null }, {  }>;
  mediantime: WebAttribute<DataPerformance_Select, { mediantime: number | null }, {  }>;
  mintime: WebAttribute<DataPerformance_Select, { mintime: number | null }, {  }>;
  operation: WebAttribute<DataPerformance_Select, { operation: string | null }, {  }>;
  optimizationstatus: WebAttribute<DataPerformance_Select, { optimizationstatus: string | null }, {  }>;
  optimizationstorage: WebAttribute<DataPerformance_Select, { optimizationstorage: number | null }, {  }>;
  organizationid_guid: WebAttribute<DataPerformance_Select, { organizationid_guid: string | null }, { organizationid_formatted?: string }>;
  realizedoptimizationimpact: WebAttribute<DataPerformance_Select, { realizedoptimizationimpact: string | null }, {  }>;
  solution: WebAttribute<DataPerformance_Select, { solution: string | null }, {  }>;
  weight: WebAttribute<DataPerformance_Select, { weight: number | null }, {  }>;
}
interface DataPerformance_Filter {
  anyoptimizationapplied: boolean;
  anyoptimizationavailable: boolean;
  component: string;
  count: number;
  dataperformanceid: XQW.Guid;
  entity: string;
  estimatedoptimizationimpact: any;
  executionperiod: string;
  lastactionresult: string;
  lastoptimizationdate: Date;
  maxtime: any;
  mediantime: any;
  mintime: any;
  operation: string;
  optimizationstatus: string;
  optimizationstorage: any;
  organizationid_guid: XQW.Guid;
  realizedoptimizationimpact: string;
  solution: string;
  weight: any;
}
interface DataPerformance_Expand {
  organizationid: WebExpand<DataPerformance_Expand, Organization_Select, Organization_Filter, { organizationid: Organization_Result }>;
}
interface DataPerformance_FormattedResult {
  lastoptimizationdate_formatted?: string;
  organizationid_formatted?: string;
}
interface DataPerformance_Result extends DataPerformance_Base, DataPerformance_Relationships {
  "@odata.etag": string;
  organizationid_guid: string | null;
}
interface DataPerformance_RelatedOne {
  organizationid: WebMappingRetrieve<Organization_Select,Organization_Expand,Organization_Filter,Organization_Fixed,Organization_Result,Organization_FormattedResult>;
}
interface DataPerformance_RelatedMany {
}
interface WebEntitiesRetrieve {
  dataperformances: WebMappingRetrieve<DataPerformance_Select,DataPerformance_Expand,DataPerformance_Filter,DataPerformance_Fixed,DataPerformance_Result,DataPerformance_FormattedResult>;
}
interface WebEntitiesRelated {
  dataperformances: WebMappingRelated<DataPerformance_RelatedOne,DataPerformance_RelatedMany>;
}
interface WebEntitiesCUDA {
  dataperformances: WebMappingCUDA<DataPerformance_Create,DataPerformance_Update,DataPerformance_Select>;
}
