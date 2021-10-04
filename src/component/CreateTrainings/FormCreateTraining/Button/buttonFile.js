import './style.scss';


const ButtonFile = () => {

    return(
        <div>
            <label for="file" class="label-file">Choisir une image</label>
            <input id="file" class="input-file" type="file" />
        </div>
        
    );

}

export default ButtonFile;