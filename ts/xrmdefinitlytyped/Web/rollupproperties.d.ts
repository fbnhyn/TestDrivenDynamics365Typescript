interface RollupProperties_Base extends WebEntity {
  aggregateattributelogicalname?: string | null;
  aggregateentitylogicalname?: string | null;
  aggregateentitytypecode?: number | null;
  aggregatefilterattributes?: string | null;
  aggregaterelationshipname?: string | null;
  aggregatetype?: rollupproperties_aggregationtype | null;
  allowhierarchyonsource?: boolean | null;
  bootstrapcurrentdepth?: number | null;
  bootstrapretrycount?: number | null;
  bootstraprollupasyncjobid?: string | null;
  bootstrapstepnumber?: number | null;
  bootstraptargetpointer?: number | null;
  datatype?: string | null;
  incrementalrollupasyncjobid?: string | null;
  initialvaluecalculationstatus?: rollupproperties_initialvaluecalculationstatus | null;
  isactivitypartyincluded?: number | null;
  lastcalculationtime?: Date | null;
  rollupattributelogicalname?: string | null;
  rollupentitybasetablename?: string | null;
  rollupentitylogicalname?: string | null;
  rollupentityprimarykeyphysicalname?: string | null;
  rollupentitytypecode?: number | null;
  rollupfilterattributes?: string | null;
  rolluppropertiesid?: string | null;
  rollupstateattributephysicalname?: string | null;
  sourcehierarchicalrelationshipname?: string | null;
  statecode?: rollupproperties_statecode | null;
  statuscode?: rollupproperties_statuscode | null;
  versionnumber?: number | null;
}
interface RollupProperties_Relationships {
  rollupjob_rollupproperties?: RollupJob_Result[] | null;
}
interface RollupProperties extends RollupProperties_Base, RollupProperties_Relationships {
}
interface RollupProperties_Create extends RollupProperties {
}
interface RollupProperties_Update extends RollupProperties {
}
interface RollupProperties_Select {
  aggregateattributelogicalname: WebAttribute<RollupProperties_Select, { aggregateattributelogicalname: string | null }, {  }>;
  aggregateentitylogicalname: WebAttribute<RollupProperties_Select, { aggregateentitylogicalname: string | null }, {  }>;
  aggregateentitytypecode: WebAttribute<RollupProperties_Select, { aggregateentitytypecode: number | null }, {  }>;
  aggregatefilterattributes: WebAttribute<RollupProperties_Select, { aggregatefilterattributes: string | null }, {  }>;
  aggregaterelationshipname: WebAttribute<RollupProperties_Select, { aggregaterelationshipname: string | null }, {  }>;
  aggregatetype: WebAttribute<RollupProperties_Select, { aggregatetype: rollupproperties_aggregationtype | null }, { aggregatetype_formatted?: string }>;
  allowhierarchyonsource: WebAttribute<RollupProperties_Select, { allowhierarchyonsource: boolean | null }, {  }>;
  bootstrapcurrentdepth: WebAttribute<RollupProperties_Select, { bootstrapcurrentdepth: number | null }, {  }>;
  bootstrapretrycount: WebAttribute<RollupProperties_Select, { bootstrapretrycount: number | null }, {  }>;
  bootstraprollupasyncjobid: WebAttribute<RollupProperties_Select, { bootstraprollupasyncjobid: string | null }, {  }>;
  bootstrapstepnumber: WebAttribute<RollupProperties_Select, { bootstrapstepnumber: number | null }, {  }>;
  bootstraptargetpointer: WebAttribute<RollupProperties_Select, { bootstraptargetpointer: number | null }, {  }>;
  datatype: WebAttribute<RollupProperties_Select, { datatype: string | null }, {  }>;
  incrementalrollupasyncjobid: WebAttribute<RollupProperties_Select, { incrementalrollupasyncjobid: string | null }, {  }>;
  initialvaluecalculationstatus: WebAttribute<RollupProperties_Select, { initialvaluecalculationstatus: rollupproperties_initialvaluecalculationstatus | null }, { initialvaluecalculationstatus_formatted?: string }>;
  isactivitypartyincluded: WebAttribute<RollupProperties_Select, { isactivitypartyincluded: number | null }, {  }>;
  lastcalculationtime: WebAttribute<RollupProperties_Select, { lastcalculationtime: Date | null }, { lastcalculationtime_formatted?: string }>;
  rollupattributelogicalname: WebAttribute<RollupProperties_Select, { rollupattributelogicalname: string | null }, {  }>;
  rollupentitybasetablename: WebAttribute<RollupProperties_Select, { rollupentitybasetablename: string | null }, {  }>;
  rollupentitylogicalname: WebAttribute<RollupProperties_Select, { rollupentitylogicalname: string | null }, {  }>;
  rollupentityprimarykeyphysicalname: WebAttribute<RollupProperties_Select, { rollupentityprimarykeyphysicalname: string | null }, {  }>;
  rollupentitytypecode: WebAttribute<RollupProperties_Select, { rollupentitytypecode: number | null }, {  }>;
  rollupfilterattributes: WebAttribute<RollupProperties_Select, { rollupfilterattributes: string | null }, {  }>;
  rolluppropertiesid: WebAttribute<RollupProperties_Select, { rolluppropertiesid: string | null }, {  }>;
  rollupstateattributephysicalname: WebAttribute<RollupProperties_Select, { rollupstateattributephysicalname: string | null }, {  }>;
  sourcehierarchicalrelationshipname: WebAttribute<RollupProperties_Select, { sourcehierarchicalrelationshipname: string | null }, {  }>;
  statecode: WebAttribute<RollupProperties_Select, { statecode: rollupproperties_statecode | null }, { statecode_formatted?: string }>;
  statuscode: WebAttribute<RollupProperties_Select, { statuscode: rollupproperties_statuscode | null }, { statuscode_formatted?: string }>;
  versionnumber: WebAttribute<RollupProperties_Select, { versionnumber: number | null }, {  }>;
}
interface RollupProperties_Filter {
  aggregateattributelogicalname: string;
  aggregateentitylogicalname: string;
  aggregateentitytypecode: number;
  aggregatefilterattributes: string;
  aggregaterelationshipname: string;
  aggregatetype: rollupproperties_aggregationtype;
  allowhierarchyonsource: boolean;
  bootstrapcurrentdepth: number;
  bootstrapretrycount: number;
  bootstraprollupasyncjobid: XQW.Guid;
  bootstrapstepnumber: number;
  bootstraptargetpointer: number;
  datatype: string;
  incrementalrollupasyncjobid: XQW.Guid;
  initialvaluecalculationstatus: rollupproperties_initialvaluecalculationstatus;
  isactivitypartyincluded: number;
  lastcalculationtime: Date;
  rollupattributelogicalname: string;
  rollupentitybasetablename: string;
  rollupentitylogicalname: string;
  rollupentityprimarykeyphysicalname: string;
  rollupentitytypecode: number;
  rollupfilterattributes: string;
  rolluppropertiesid: XQW.Guid;
  rollupstateattributephysicalname: string;
  sourcehierarchicalrelationshipname: string;
  statecode: rollupproperties_statecode;
  statuscode: rollupproperties_statuscode;
  versionnumber: number;
}
interface RollupProperties_Expand {
  rollupjob_rollupproperties: WebExpand<RollupProperties_Expand, RollupJob_Select, RollupJob_Filter, { rollupjob_rollupproperties: RollupJob_Result[] }>;
}
interface RollupProperties_FormattedResult {
  aggregatetype_formatted?: string;
  initialvaluecalculationstatus_formatted?: string;
  lastcalculationtime_formatted?: string;
  statecode_formatted?: string;
  statuscode_formatted?: string;
}
interface RollupProperties_Result extends RollupProperties_Base, RollupProperties_Relationships {
  "@odata.etag": string;
}
interface RollupProperties_RelatedOne {
}
interface RollupProperties_RelatedMany {
  rollupjob_rollupproperties: WebMappingRetrieve<RollupJob_Select,RollupJob_Expand,RollupJob_Filter,RollupJob_Fixed,RollupJob_Result,RollupJob_FormattedResult>;
}
interface WebEntitiesRetrieve {
  rolluppropertiescollection: WebMappingRetrieve<RollupProperties_Select,RollupProperties_Expand,RollupProperties_Filter,RollupProperties_Fixed,RollupProperties_Result,RollupProperties_FormattedResult>;
}
interface WebEntitiesRelated {
  rolluppropertiescollection: WebMappingRelated<RollupProperties_RelatedOne,RollupProperties_RelatedMany>;
}
interface WebEntitiesCUDA {
  rolluppropertiescollection: WebMappingCUDA<RollupProperties_Create,RollupProperties_Update,RollupProperties_Select>;
}
