
export default  function MyDisplay ({number}) {
  console.log("inside MyDisplay");
  //console.log(this.props.text);
    return (
            <h4 className="bg-primary text-white text-center p-2 m-2">
                 You just select the number: {number}
            </h4>
        )
    
}