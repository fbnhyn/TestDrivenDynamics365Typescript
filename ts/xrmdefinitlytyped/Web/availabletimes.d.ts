interface availabletimes_Base extends WebEntity {
  availabletimesid?: string | null;
  name?: string | null;
  resources?: string | null;
  resourcesJson?: string | null;
  scheduledend?: Date | null;
  scheduledendlocaltime?: string | null;
  scheduledstart?: Date | null;
  scheduledstartlocaltime?: string | null;
  site?: string | null;
  siteid?: string | null;
}
interface availabletimes_Relationships {
}
interface availabletimes extends availabletimes_Base, availabletimes_Relationships {
}
interface availabletimes_Create extends availabletimes {
}
interface availabletimes_Update extends availabletimes {
}
interface availabletimes_Select {
  availabletimesid: WebAttribute<availabletimes_Select, { availabletimesid: string | null }, {  }>;
  name: WebAttribute<availabletimes_Select, { name: string | null }, {  }>;
  resources: WebAttribute<availabletimes_Select, { resources: string | null }, {  }>;
  resourcesJson: WebAttribute<availabletimes_Select, { resourcesJson: string | null }, {  }>;
  scheduledend: WebAttribute<availabletimes_Select, { scheduledend: Date | null }, { scheduledend_formatted?: string }>;
  scheduledendlocaltime: WebAttribute<availabletimes_Select, { scheduledendlocaltime: string | null }, {  }>;
  scheduledstart: WebAttribute<availabletimes_Select, { scheduledstart: Date | null }, { scheduledstart_formatted?: string }>;
  scheduledstartlocaltime: WebAttribute<availabletimes_Select, { scheduledstartlocaltime: string | null }, {  }>;
  site: WebAttribute<availabletimes_Select, { site: string | null }, {  }>;
  siteid: WebAttribute<availabletimes_Select, { siteid: string | null }, {  }>;
}
interface availabletimes_Filter {
  availabletimesid: XQW.Guid;
  name: string;
  resources: string;
  resourcesJson: string;
  scheduledend: Date;
  scheduledendlocaltime: string;
  scheduledstart: Date;
  scheduledstartlocaltime: string;
  site: string;
  siteid: XQW.Guid;
}
interface availabletimes_Expand {
}
interface availabletimes_FormattedResult {
  scheduledend_formatted?: string;
  scheduledstart_formatted?: string;
}
interface availabletimes_Result extends availabletimes_Base, availabletimes_Relationships {
  "@odata.etag": string;
}
interface availabletimes_RelatedOne {
}
interface availabletimes_RelatedMany {
}
interface WebEntitiesRetrieve {
  availabletimescollection: WebMappingRetrieve<availabletimes_Select,availabletimes_Expand,availabletimes_Filter,availabletimes_Fixed,availabletimes_Result,availabletimes_FormattedResult>;
}
interface WebEntitiesRelated {
  availabletimescollection: WebMappingRelated<availabletimes_RelatedOne,availabletimes_RelatedMany>;
}
interface WebEntitiesCUDA {
  availabletimescollection: WebMappingCUDA<availabletimes_Create,availabletimes_Update,availabletimes_Select>;
}
