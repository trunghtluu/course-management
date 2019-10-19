import React from 'react';
import TextInput from './common/TextInput';

function CourseForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput 
                id="title" 
                label="Title"
                onChange={props.onChange} 
                name="title"
                value={props.course.title}
                error={props.errors.title}/>

            <div className="form-group">
                <label htmlFor="author">Author</label>
                <div className="field">
                    <select
                        id="author"
                        onChange={props.onChange}
                        name="authorId"
                        value={props.course.authorId || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">Cory House</option>
                        <option value="2">Scott Allen</option>
                    </select>
                </div>
                {props.errors.authorId && <div className="alert alert-danger">{props.errors.authorId}</div>}
            </div>

            <TextInput
                id="category"
                label="Category"
                onChange={props.onChange}
                name="category"
                value={props.course.category}
                error={props.errors.category}/>

            <div className="form-group">
                <label htmlFor="site">Site</label>
                <div className="field">
                    <select
                        id="site"
                        onChange={props.onChange}
                        name="siteId"
                        value={props.course.siteId || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="1">pluralsight.com</option>
                    </select>
                </div>
                {props.errors.siteId && <div className="alert alert-danger">{props.errors.siteId}</div>}
            </div>

            <input type="submit" value="Save" className="btn btn-primary" onClick={props.onSubmit}/>
        </form>
    );
}

export default CourseForm;