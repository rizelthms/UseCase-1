import React, { useRef, useState } from "react";
import "./FilterWindow.css";
import IconFilter from "../icons/IconFilter";
import resources from "../../i18n/resources";
import { useTranslation } from "react-i18next";
import FilterCondition from "./../filterCondition/FilterCondition";


const FilterWindow = ({ onClose }) => {
    const { t } = useTranslation();

    const [severityOptions, setSeverityOptions] = useState([
        { string: "Low" },
        { string: "Medium" },
        { string: "High" },
    ]);

    const [activityOptions, setActivityOptions] = useState([
        { string: "Hot Yoga" },
        { string: "BodyStep" },
        { string: "BodyBalance" },
        { string: "Pilates" },
        { string: "Zumba" },
    ]);


    const handleApplyFilters = () => {
        onClose();
    };

    const handleResetFilters = () => { };

    return (
        <div className="filter-window-container">
            <div className="filter-window-header">{t(resources.button_filters)}</div>
            <div className="filter-window-body-container">
                <div className="filter-window-body">
                    <form>
                        <div className="filter-dropdown-container">
                            <select className="filter-dropdown filter-dropdown1">
                                <option value="Instuctors1">Instuctors1</option>
                                <option value="Instuctors2">Instuctors2</option>
                                <option value="Instuctors3">Instuctors3</option>
                            </select>
                            <select className="filter-dropdown filter-dropdown2">
                                <option value="Location1">Location1</option>
                                <option value="Location2">Location2</option>
                                <option value="Location3">Location3</option>
                            </select>
                        </div>
                        <div className="filter-intensity">
                            <p className="filter-label">{t(resources.filter_intensity)}</p>
                            <div className="plus-cross-container">
                                {severityOptions.map((text, index) => (
                                    <FilterCondition
                                        key={index}
                                        string={text.string}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="filter-class-type">
                            <p className="filter-label">{t(resources.filter_type)}</p>
                            <div className="plus-cross-container under-plus-cross-container">
                                {activityOptions.map((text, index) => (
                                    <FilterCondition
                                        key={index}
                                        string={text.string}
                                    />
                                ))}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="filter-window-footer"></div>
        </div>
    );
};

export default FilterWindow;
