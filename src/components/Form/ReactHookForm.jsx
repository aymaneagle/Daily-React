import {useForm} from 'react-hook-form'

const ReactHookForm = () => {
    const {register,
        handleSubmit,
        formState: {errors,isSubmitting},
    } = useForm();

    const onSubmit = (data)=>{
        console.log(data);
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>First Name:</label>
                <input {...register("firstName", {
                    required: true,
                    minLength: {
                        value: 3,
                        message: "Minimum length 3"
                    },
                    maxLength: {
                        value:7,
                        message: "Maximum length 7"
                    }
                       })}/>
            </div>
            {errors.firstName && <p className="text-red-600"> {errors.firstName.message} </p>}
          <div>
              <label>Last Name:</label>
              <input {...register("lastName")}/>
          </div>

            <input type="submit"
                   className="px-2 py-1 border bg-orange-200"
                   disabled={isSubmitting}

                   //Submitting wasn't visible so tried reverse to get visual
                   value = {!isSubmitting ? "Submitting..." : "Submit"}
            />

        </form>
    )
};

export default ReactHookForm;