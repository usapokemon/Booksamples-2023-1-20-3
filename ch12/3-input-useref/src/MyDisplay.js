
export default  function MyDisplay ({text}) {
  console.log("inside MyDisplay");
  //console.log(this.props.text);
    return (
            <h4 className="bg-primary text-white text-center p-2 m-2">
                 You just entered: {text}
            </h4>
        )
    
}