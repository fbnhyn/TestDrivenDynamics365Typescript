interface GlobalSearchConfiguration_Base extends WebEntity {
  componentstate?: componentstate | null;
  globalsearchconfigurationid?: string | null;
  globalsearchconfigurationidunique?: string | null;
  isenabled?: boolean | null;
  islocalized?: boolean | null;
  ismanaged?: boolean | null;
  issearchboxvisible?: boolean | null;
  overwritetime?: Date | null;
  searchprovidername?: string | null;
  searchproviderresultspage?: string | null;
  solutionid?: string | null;
  supportingsolutionid?: string | null;
}
interface GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration extends GlobalSearchConfiguration_Base, GlobalSearchConfiguration_Relationships {
}
interface GlobalSearchConfiguration_Create extends GlobalSearchConfiguration {
}
interface GlobalSearchConfiguration_Update extends GlobalSearchConfiguration {
}
interface GlobalSearchConfiguration_Select {
  componentstate: WebAttribute<GlobalSearchConfiguration_Select, { componentstate: componentstate | null }, { componentstate_formatted?: string }>;
  globalsearchconfigurationid: WebAttribute<GlobalSearchConfiguration_Select, { globalsearchconfigurationid: string | null }, {  }>;
  globalsearchconfigurationidunique: WebAttribute<GlobalSearchConfiguration_Select, { globalsearchconfigurationidunique: string | null }, {  }>;
  isenabled: WebAttribute<GlobalSearchConfiguration_Select, { isenabled: boolean | null }, {  }>;
  islocalized: WebAttribute<GlobalSearchConfiguration_Select, { islocalized: boolean | null }, {  }>;
  ismanaged: WebAttribute<GlobalSearchConfiguration_Select, { ismanaged: boolean | null }, {  }>;
  issearchboxvisible: WebAttribute<GlobalSearchConfiguration_Select, { issearchboxvisible: boolean | null }, {  }>;
  overwritetime: WebAttribute<GlobalSearchConfiguration_Select, { overwritetime: Date | null }, { overwritetime_formatted?: string }>;
  searchprovidername: WebAttribute<GlobalSearchConfiguration_Select, { searchprovidername: string | null }, {  }>;
  searchproviderresultspage: WebAttribute<GlobalSearchConfiguration_Select, { searchproviderresultspage: string | null }, {  }>;
  solutionid: WebAttribute<GlobalSearchConfiguration_Select, { solutionid: string | null }, {  }>;
  supportingsolutionid: WebAttribute<GlobalSearchConfiguration_Select, { supportingsolutionid: string | null }, {  }>;
}
interface GlobalSearchConfiguration_Filter {
  componentstate: componentstate;
  globalsearchconfigurationid: XQW.Guid;
  globalsearchconfigurationidunique: XQW.Guid;
  isenabled: boolean;
  islocalized: boolean;
  ismanaged: boolean;
  issearchboxvisible: boolean;
  overwritetime: Date;
  searchprovidername: string;
  searchproviderresultspage: string;
  solutionid: XQW.Guid;
  supportingsolutionid: XQW.Guid;
}
interface GlobalSearchConfiguration_Expand {
}
interface GlobalSearchConfiguration_FormattedResult {
  componentstate_formatted?: string;
  overwritetime_formatted?: string;
}
interface GlobalSearchConfiguration_Result extends GlobalSearchConfiguration_Base, GlobalSearchConfiguration_Relationships {
  "@odata.etag": string;
}
interface GlobalSearchConfiguration_RelatedOne {
}
interface GlobalSearchConfiguration_RelatedMany {
}
interface WebEntitiesRetrieve {
  globalsearchconfigurations: WebMappingRetrieve<GlobalSearchConfiguration_Select,GlobalSearchConfiguration_Expand,GlobalSearchConfiguration_Filter,GlobalSearchConfiguration_Fixed,GlobalSearchConfiguration_Result,GlobalSearchConfiguration_FormattedResult>;
}
interface WebEntitiesRelated {
  globalsearchconfigurations: WebMappingRelated<GlobalSearchConfiguration_RelatedOne,GlobalSearchConfiguration_RelatedMany>;
}
interface WebEntitiesCUDA {
  globalsearchconfigurations: WebMappingCUDA<GlobalSearchConfiguration_Create,GlobalSearchConfiguration_Update,GlobalSearchConfiguration_Select>;
}
