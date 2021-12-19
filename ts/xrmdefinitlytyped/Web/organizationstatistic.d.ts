interface OrganizationStatistic_Base extends WebEntity {
  hour?: number | null;
  organizationstatisticid?: string | null;
  servername?: string | null;
  statistictype?: number | null;
  statisticvalue?: number | null;
}
interface OrganizationStatistic_Relationships {
  userentityinstancedata_organizationstatistic?: UserEntityInstanceData_Result[] | null;
}
interface OrganizationStatistic extends OrganizationStatistic_Base, OrganizationStatistic_Relationships {
}
interface OrganizationStatistic_Create extends OrganizationStatistic {
}
interface OrganizationStatistic_Update extends OrganizationStatistic {
}
interface OrganizationStatistic_Select {
  hour: WebAttribute<OrganizationStatistic_Select, { hour: number | null }, {  }>;
  organizationstatisticid: WebAttribute<OrganizationStatistic_Select, { organizationstatisticid: string | null }, {  }>;
  servername: WebAttribute<OrganizationStatistic_Select, { servername: string | null }, {  }>;
  statistictype: WebAttribute<OrganizationStatistic_Select, { statistictype: number | null }, {  }>;
  statisticvalue: WebAttribute<OrganizationStatistic_Select, { statisticvalue: number | null }, {  }>;
}
interface OrganizationStatistic_Filter {
  hour: number;
  organizationstatisticid: XQW.Guid;
  servername: string;
  statistictype: number;
  statisticvalue: number;
}
interface OrganizationStatistic_Expand {
  userentityinstancedata_organizationstatistic: WebExpand<OrganizationStatistic_Expand, UserEntityInstanceData_Select, UserEntityInstanceData_Filter, { userentityinstancedata_organizationstatistic: UserEntityInstanceData_Result[] }>;
}
interface OrganizationStatistic_FormattedResult {
}
interface OrganizationStatistic_Result extends OrganizationStatistic_Base, OrganizationStatistic_Relationships {
  "@odata.etag": string;
}
interface OrganizationStatistic_RelatedOne {
}
interface OrganizationStatistic_RelatedMany {
  userentityinstancedata_organizationstatistic: WebMappingRetrieve<UserEntityInstanceData_Select,UserEntityInstanceData_Expand,UserEntityInstanceData_Filter,UserEntityInstanceData_Fixed,UserEntityInstanceData_Result,UserEntityInstanceData_FormattedResult>;
}
interface WebEntitiesRetrieve {
  organizationstatistics: WebMappingRetrieve<OrganizationStatistic_Select,OrganizationStatistic_Expand,OrganizationStatistic_Filter,OrganizationStatistic_Fixed,OrganizationStatistic_Result,OrganizationStatistic_FormattedResult>;
}
interface WebEntitiesRelated {
  organizationstatistics: WebMappingRelated<OrganizationStatistic_RelatedOne,OrganizationStatistic_RelatedMany>;
}
interface WebEntitiesCUDA {
  organizationstatistics: WebMappingCUDA<OrganizationStatistic_Create,OrganizationStatistic_Update,OrganizationStatistic_Select>;
}
