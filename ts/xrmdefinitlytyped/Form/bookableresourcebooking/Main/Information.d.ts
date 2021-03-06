declare namespace Form.bookableresourcebooking.Main {
  namespace Information {
    namespace Tabs {
      interface FieldService extends Xrm.SectionCollectionBase {
        get(name: "FieldService_section_2"): Xrm.PageSection;
        get(name: "FieldService_section_3"): Xrm.PageSection;
        get(name: "FieldService_section_3"): Xrm.PageSection;
        get(name: "FieldService_section_4"): Xrm.PageSection;
        get(name: "FieldService_section_5"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: "tab_2_section_4"): Xrm.PageSection;
        get(name: "tab_2_section_5"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_timeline extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "bookingstatus"): Xrm.LookupAttribute<"bookingstatus">;
      get(name: "bookingtype"): Xrm.OptionSetAttribute<bookableresourcebooking_bookingtype>;
      get(name: "duration"): Xrm.NumberAttribute;
      get(name: "endtime"): Xrm.DateAttribute;
      get(name: "msdyn_acceptcascadecrewchanges"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_actualarrivaltime"): Xrm.DateAttribute;
      get(name: "msdyn_actualtravelduration"): Xrm.NumberAttribute;
      get(name: "msdyn_agreementbookingdate"): Xrm.LookupAttribute<"msdyn_agreementbookingdate">;
      get(name: "msdyn_allowoverlapping"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_bookingmethod"): Xrm.OptionSetAttribute<msdyn_resourceschedulesource>;
      get(name: "msdyn_cascadecrewchanges"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_crew"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_crewmembertype"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_effort"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedarrivaltime"): Xrm.DateAttribute;
      get(name: "msdyn_estimatedtravelduration"): Xrm.NumberAttribute;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_milestraveled"): Xrm.NumberAttribute;
      get(name: "msdyn_offlinetimestamp"): Xrm.DateAttribute;
      get(name: "msdyn_preventtimestampcreation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_quickNoteAction"): Xrm.OptionSetAttribute<msdyn_quicknote_type>;
      get(name: "msdyn_resourcegroup"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_resourcerequirement"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
      get(name: "msdyn_timegroupdetailselected"): Xrm.LookupAttribute<"msdyn_timegroupdetail">;
      get(name: "msdyn_totalbillableduration"): Xrm.NumberAttribute;
      get(name: "msdyn_totalbreakduration"): Xrm.NumberAttribute;
      get(name: "msdyn_totalcost"): Xrm.NumberAttribute;
      get(name: "msdyn_totaldurationinprogress"): Xrm.NumberAttribute;
      get(name: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "resource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "starttime"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "TIMESTAMPS"): Xrm.SubGridControl<"msdyn_bookingtimestamp">;
      get(name: "TIMESTAMPS1"): Xrm.SubGridControl<"msdyn_bookingtimestamp">;
      get(name: "bookingstatus"): Xrm.LookupControl<"bookingstatus">;
      get(name: "bookingtype"): Xrm.OptionSetControl<bookableresourcebooking_bookingtype>;
      get(name: "duration"): Xrm.NumberControl;
      get(name: "endtime"): Xrm.DateControl;
      get(name: "msdyn_acceptcascadecrewchanges"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_actualarrivaltime"): Xrm.DateControl;
      get(name: "msdyn_actualtravelduration"): Xrm.NumberControl;
      get(name: "msdyn_agreementbookingdate"): Xrm.LookupControl<"msdyn_agreementbookingdate">;
      get(name: "msdyn_allowoverlapping"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_bookingmethod"): Xrm.OptionSetControl<msdyn_resourceschedulesource>;
      get(name: "msdyn_cascadecrewchanges"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_crew"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_crewmembertype"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_effort"): Xrm.NumberControl;
      get(name: "msdyn_estimatedarrivaltime"): Xrm.DateControl;
      get(name: "msdyn_estimatedtravelduration"): Xrm.NumberControl;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_milestraveled"): Xrm.NumberControl;
      get(name: "msdyn_offlinetimestamp"): Xrm.DateControl;
      get(name: "msdyn_preventtimestampcreation"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_quickNoteAction"): Xrm.OptionSetControl<msdyn_quicknote_type>;
      get(name: "msdyn_quicknotescontrol"): Xrm.BaseControl;
      get(name: "msdyn_resourcegroup"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_resourcerequirement"): Xrm.LookupControl<"msdyn_resourcerequirement">;
      get(name: "msdyn_timegroupdetailselected"): Xrm.LookupControl<"msdyn_timegroupdetail">;
      get(name: "msdyn_totalbillableduration"): Xrm.NumberControl;
      get(name: "msdyn_totalbreakduration"): Xrm.NumberControl;
      get(name: "msdyn_totalcost"): Xrm.NumberControl;
      get(name: "msdyn_totaldurationinprogress"): Xrm.NumberControl;
      get(name: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "resource"): Xrm.LookupControl<"bookableresource">;
      get(name: "starttime"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "FieldService"): Xrm.PageTab<Tabs.FieldService>;
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: "tab_timeline"): Xrm.PageTab<Tabs.tab_timeline>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "bookingstatus"): Xrm.LookupAttribute<"bookingstatus">;
    getAttribute(attributeName: "bookingtype"): Xrm.OptionSetAttribute<bookableresourcebooking_bookingtype>;
    getAttribute(attributeName: "duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "endtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_acceptcascadecrewchanges"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_actualarrivaltime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_actualtravelduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_agreementbookingdate"): Xrm.LookupAttribute<"msdyn_agreementbookingdate">;
    getAttribute(attributeName: "msdyn_allowoverlapping"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_bookingmethod"): Xrm.OptionSetAttribute<msdyn_resourceschedulesource>;
    getAttribute(attributeName: "msdyn_cascadecrewchanges"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_crew"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_crewmembertype"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_effort"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedarrivaltime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_estimatedtravelduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_milestraveled"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_offlinetimestamp"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_preventtimestampcreation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_quickNoteAction"): Xrm.OptionSetAttribute<msdyn_quicknote_type>;
    getAttribute(attributeName: "msdyn_resourcegroup"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_resourcerequirement"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
    getAttribute(attributeName: "msdyn_timegroupdetailselected"): Xrm.LookupAttribute<"msdyn_timegroupdetail">;
    getAttribute(attributeName: "msdyn_totalbillableduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_totalbreakduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_totalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_totaldurationinprogress"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "resource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "starttime"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "TIMESTAMPS"): Xrm.SubGridControl<"msdyn_bookingtimestamp">;
    getControl(controlName: "TIMESTAMPS1"): Xrm.SubGridControl<"msdyn_bookingtimestamp">;
    getControl(controlName: "bookingstatus"): Xrm.LookupControl<"bookingstatus">;
    getControl(controlName: "bookingtype"): Xrm.OptionSetControl<bookableresourcebooking_bookingtype>;
    getControl(controlName: "duration"): Xrm.NumberControl;
    getControl(controlName: "endtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_acceptcascadecrewchanges"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_actualarrivaltime"): Xrm.DateControl;
    getControl(controlName: "msdyn_actualtravelduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_agreementbookingdate"): Xrm.LookupControl<"msdyn_agreementbookingdate">;
    getControl(controlName: "msdyn_allowoverlapping"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_bookingmethod"): Xrm.OptionSetControl<msdyn_resourceschedulesource>;
    getControl(controlName: "msdyn_cascadecrewchanges"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_crew"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_crewmembertype"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_effort"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedarrivaltime"): Xrm.DateControl;
    getControl(controlName: "msdyn_estimatedtravelduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_milestraveled"): Xrm.NumberControl;
    getControl(controlName: "msdyn_offlinetimestamp"): Xrm.DateControl;
    getControl(controlName: "msdyn_preventtimestampcreation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_quickNoteAction"): Xrm.OptionSetControl<msdyn_quicknote_type>;
    getControl(controlName: "msdyn_quicknotescontrol"): Xrm.BaseControl;
    getControl(controlName: "msdyn_resourcegroup"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_resourcerequirement"): Xrm.LookupControl<"msdyn_resourcerequirement">;
    getControl(controlName: "msdyn_timegroupdetailselected"): Xrm.LookupControl<"msdyn_timegroupdetail">;
    getControl(controlName: "msdyn_totalbillableduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_totalbreakduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_totalcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_totaldurationinprogress"): Xrm.NumberControl;
    getControl(controlName: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "resource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "starttime"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
