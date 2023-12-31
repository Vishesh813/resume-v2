import { Footer, FooterLinkList, FooterSection } from "react-mdl"

const CustomFooter = () => {
    return (
        <>
            <Footer size="mini">
                <FooterSection type="left" logo="Title">
                    <FooterLinkList>
                        <a href="#">Help</a>
                        <a href="#">Privacy & Terms</a>
                    </FooterLinkList>
                </FooterSection>
            </Footer>
        </>
    )
}

export default CustomFooter;